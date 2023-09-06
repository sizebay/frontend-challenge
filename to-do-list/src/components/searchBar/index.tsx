import {  useRef, useState } from 'react'
import './style.css'
import GenericButton from '../genericButton';

interface ISearchBarProps{
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string | null;
    width: string;
    height?: string;
    margin?: string;
}

const SearchBar = ({ placeholder, onChange, value, width, height, margin } : ISearchBarProps) => { 

    const [isChangeValueInput, setIsChangeValueInput] = useState(false)
    const inputRef = useRef<HTMLInputElement | null>(null);
    
    const clearInput = () => {
        if (inputRef.current) {
          inputRef.current.value = ''; 
          onChange({ target: inputRef.current } as React.ChangeEvent<HTMLInputElement>);
        }
    };

    return(
        <div className='container_searchBar'
            style={{
                width,
                height,
                margin
            }}
        >
            <input
                type='text'
                onFocus={()=> setIsChangeValueInput(true)}
                onBlur={()=> setIsChangeValueInput(false)}
                onChange={onChange}
                value={value || undefined}
                placeholder={placeholder}
                ref={inputRef}
            />
            <GenericButton
                backgroundColor='transparent'
                onClick={clearInput}
                icon={
                    isChangeValueInput ? (
                        <svg width={17.49} height={17.49} fill="none" stroke="#848484" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24">
                            <path d="M17.25 17.25 6.75 6.75" />
                            <path d="m17.25 6.75-10.5 10.5" />
                        </svg>
                    ) : 
                    (
                        <svg width={17.49} height={17.49} fill="none" stroke="#848484" strokeLinecap="round" strokeWidth={3} viewBox="0 0 24 24">
                            <path d="M10.364 3a7.364 7.364 0 1 0 0 14.727 7.364 7.364 0 0 0 0-14.727v0Z" />
                            <path d="M15.857 15.86 21 21.001" />
                        </svg>
                    )
                }
            />
        </div>
    )
}


export default SearchBar