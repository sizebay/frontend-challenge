import React, { FC, MouseEventHandler } from 'react'
import './style.css'

interface IGenericButtonProps{
    placeholder: string;
    backgroundColor: string;
    color: string;
    border: string;
    width: string;
    height: string;
    margin: string;
    icon: React.ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const GenericButton : FC<IGenericButtonProps> = ({ placeholder, backgroundColor, color, border, width, height, margin, icon, onClick }) =>{

    return(
        <button
            onClick={onClick}
            style={{
                color: color,
                backgroundColor: backgroundColor,
                border: border,
                margin: margin,
                height: height,
                width: width
            }}
        >
            {icon}
            {placeholder}
        </button>
    )
}
export default GenericButton