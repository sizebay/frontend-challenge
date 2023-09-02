import { ChangeEventHandler, FC } from 'react'
import './style.css'

interface ISearchBarProps{
    placeholder: string;
    onChange(): ChangeEventHandler<HTMLInputElement>;
    width: string;
    height?: string;
    margin?: string;
}

const SearchBar : FC<ISearchBarProps> = ({ placeholder, onChange, width, height, margin }) => { 

    return(
        <input
            type='search'
            onChange={onChange}
            placeholder={placeholder}
            style={{
                width: width,
                height: height,
                margin: margin
            }}
        />
    )
}
export default SearchBar