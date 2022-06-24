import { MagnifyingGlass } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useAllTodos } from '../../Contexts/AllTodos';
import { FilterButtonsContainer, FilterInput, FilterInputContainer, FilterTodosContainer, TagButton } from './styles';

export function FilterTodos() {

    const { setTodos, allTodos } = useAllTodos()
    const [searchTerm, setSearchTerm] = useState('')
    const [searchTag, setSearchTag] = useState('')

    function searchByTerm() {
        searchTerm.length > 0 ?
            setTodos(allTodos.filter(todo => todo.text.toLowerCase().includes(searchTerm.toLowerCase()))) :
            setTodos(allTodos)
        setSearchTerm('')
    }

    function searchByTags() {
        if (searchTag === 'reset') return setTodos(allTodos)
        if (searchTag === 'done') return setTodos(allTodos.filter(todo => todo.completed === true))
        if (searchTag === 'pending') return setTodos(allTodos.filter(todo => todo.completed === false))
    }

    useEffect(() => {
        searchByTags()
    }, [searchTag])

    return (
        <FilterTodosContainer>
            <FilterButtonsContainer>
                <TagButton
                    value={'done'}
                    selected={searchTag === 'done'}
                    onClick={(e) => {
                        setSearchTag(
                            searchTag === (e.target as HTMLButtonElement).value ?
                                'reset' :
                                (e.target as HTMLButtonElement).value);
                    }}
                >
                    Done
                </TagButton>
                <TagButton
                    value={'pending'}
                    selected={searchTag === 'pending'}
                    onClick={(e) => {
                        setSearchTag(searchTag === (e.target as HTMLButtonElement).value ?
                            'reset' :
                            (e.target as HTMLButtonElement).value);
                    }}
                >
                    Pending
                </TagButton>
            </FilterButtonsContainer>
            <FilterInputContainer>
                <FilterInput
                    type="text"
                    placeholder='Search items'
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                />
                <MagnifyingGlass
                    size={26}
                    weight={'bold'}
                    width="10%"
                    onClick={searchByTerm}
                />
            </FilterInputContainer>
        </FilterTodosContainer>
    )
}