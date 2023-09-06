import {  MouseEventHandler, useState } from 'react'
import './style.css'

interface IFilterButtonProps{
    isClicked?: boolean;
    placeholder: string;
    margin?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>; 
}

const FilterButton = ({ placeholder,  margin, onClick } : IFilterButtonProps) =>{

    const [isClickedFilter, setIsClickedFilter] = useState(false)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setIsClickedFilter(!isClickedFilter); 
        if (onClick) {
            onClick(event); 
        }
    }

    return(
        <button 
            className='filterButton'
            onClick={handleClick }
            onAuxClick={()=>setIsClickedFilter(!isClickedFilter)}
            style={{
                backgroundColor: isClickedFilter ? "#F7F7F8" : "transparent",
                border: isClickedFilter ? "1.5px solid #4DA6B3" : "1.5px solid #DBDBDB",
                color: isClickedFilter ? "#4DA6B3" : "#848484",
                margin: margin
            }}
        >
            {isClickedFilter && 
                (
                    <svg width={11.75} height={15} fill="none" stroke="#4DA6B3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24"  
                        style={{margin: '0em 0.3em 0em 0em'}}  
                    > 
                        <path d="M19.5 6 9 18l-4.5-4.5" />
                    </svg>
                )
            }
            <p>
                {placeholder}
            </p>
        </button>
    )
}
export default FilterButton