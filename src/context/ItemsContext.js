import { createContext, useEffect, useState } from "react"
import confetti from "canvas-confetti"

// Create context
export const ItemsContext = createContext()

// Create provider
export const ItemsProvider = ({ children }) => {
    const [ items, setItems ] = useState([])
    const [ doneSelected, setDoneSelected ] = useState(false)
    const [ pendingSelected, setPendingSelected ] = useState(false)
    const [ searchInput, setSearchInput ] = useState('')
    const [ invisibleFilter, setInvisibleFilter ] = useState('')
    const [ refreshFilter, setRefreshFilter ] = useState(0)
    const [ oldRefreshFilter, setOldRefreshFilter ] = useState(0)

    // Function to filter items
    useEffect(() => {
        const filteredItems = items.map(item => {
            item.show = false

            if ((doneSelected && pendingSelected)) {
                item.show = true
            } else if ((doneSelected && !pendingSelected) && item.done) {
                item.show = true
            } else if ((!doneSelected && pendingSelected) && !item.done) {
                item.show = true
            } else if (!doneSelected && !pendingSelected) {
                item.show = true
            }

            if (item.show === true && searchInput.trim().length > 0 && item.title.search(searchInput.trim()) === -1) {
                item.show = false
            }

            return item
        })

        setItems(filteredItems)

        if (refreshFilter !== oldRefreshFilter) {
            confettiAnimation()
        }

        setOldRefreshFilter(refreshFilter)

    }, [ doneSelected, pendingSelected, refreshFilter ] )

    // Function to confetti animation
    const confettiAnimation = () => {
        const qtyDoneItems = items.filter(item => item.done === true).length

        if (qtyDoneItems > 0 && qtyDoneItems === items.length) {
            const xCoordinate = (1 / window.innerWidth) * document.querySelector('#progress-bar').getBoundingClientRect().right
            const yCoordinate = (1 / window.innerHeight) * document.querySelector('#progress-bar').getBoundingClientRect().bottom

            confetti({
                particleCount: 200,
                startVelocity: 20,
                spread: 70,
                origin: {
                    x: xCoordinate.toFixed(2),
                    y: yCoordinate.toFixed(2)
                }
            })
        }
    }

    return (

        <ItemsContext.Provider 
            value={{ 
                items, 
                setItems, 
                doneSelected, 
                setDoneSelected, 
                pendingSelected, 
                setPendingSelected, 
                searchInput, 
                setSearchInput, 
                invisibleFilter, 
                setInvisibleFilter, 
                refreshFilter, 
                setRefreshFilter
            }}
        >
            
            { children }

        </ItemsContext.Provider>

    )
}