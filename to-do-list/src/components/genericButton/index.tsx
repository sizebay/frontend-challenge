import {  MouseEventHandler, ReactNode } from 'react'
import './style.css'

interface IGenericButtonProps{
    backgroundColor: string;
    width?: string;
    height?: string;
    margin?: string;
    icon: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const GenericButton = ({  backgroundColor, width, height, margin, icon, onClick } : IGenericButtonProps) =>{
    return(
        <button
            className='genericButton'
            data-testid="icon-container"
            onClick={onClick}
            style={{
                backgroundColor,
                width,
                height,
                margin
            }}
        >
            {icon}
        </button>
    )
}
export default GenericButton;