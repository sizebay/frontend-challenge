import React, {  MouseEventHandler } from 'react'
import './style.css'

interface IFilterButtonProps{
    isClicked?: boolean;
    placeholder: string;
    margin?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>; 
    backgroundColor: string;
    border: string;
    color: string;
    icon: React.ReactNode
}

const FilterButton = ({ placeholder,  margin, onClick, backgroundColor, border, color, icon } : IFilterButtonProps) =>{

    return(
        <button 
            className='filterButton'
            onClick={onClick }
            style={{
                backgroundColor: backgroundColor,
                border: border,
                color: color,
                margin: margin
            }}
        >
            {icon}
            <p>
                {placeholder}
            </p>
        </button>
    )
}
export default FilterButton