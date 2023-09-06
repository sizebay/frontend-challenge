import { useContext } from "react"
import Switch from "react-switch"
import { ThemeContext } from "../../services/themeServices/themeContext"
import './style.css'


const ToolsBar = () => {

    const { theme, toggleTheme } = useContext(ThemeContext)
    
    return(
        <div className="container_toolsBar">
            <Switch
                onChange={toggleTheme}
                checked={theme.title === 'darkTheme'}
                checkedIcon={
                    <svg width={20} height={19} fill="#ffffff" viewBox="0 0 24 24" style={{ margin: '2px 5px 2px 3px' }}>
                        <path d="M12 5.531A1.031 1.031 0 0 1 10.969 4.5V2.25a1.031 1.031 0 1 1 2.062 0V4.5A1.031 1.031 0 0 1 12 5.531Z" />
                        <path d="M12 22.781a1.031 1.031 0 0 1-1.031-1.031V19.5a1.031 1.031 0 1 1 2.062 0v2.25A1.031 1.031 0 0 1 12 22.781Z" />
                        <path d="M17.303 7.73a1.032 1.032 0 0 1-.73-1.76l1.591-1.592a1.031 1.031 0 0 1 1.458 1.459l-1.59 1.59a1.027 1.027 0 0 1-.73.303Z" />
                        <path d="M5.105 19.929a1.03 1.03 0 0 1-.729-1.76l1.591-1.592a1.031 1.031 0 1 1 1.459 1.459l-1.591 1.59a1.03 1.03 0 0 1-.73.303Z" />
                        <path d="M21.75 13.031H19.5a1.031 1.031 0 1 1 0-2.062h2.25a1.031 1.031 0 1 1 0 2.062Z" />
                        <path d="M4.5 13.031H2.25a1.031 1.031 0 1 1 0-2.062H4.5a1.031 1.031 0 1 1 0 2.062Z" />
                        <path d="M18.894 19.925a1.027 1.027 0 0 1-.73-.302l-1.59-1.591a1.03 1.03 0 0 1 1.458-1.458l1.591 1.59a1.031 1.031 0 0 1-.729 1.761Z" />
                        <path d="M6.696 7.73a1.026 1.026 0 0 1-.729-.302l-1.59-1.591a1.031 1.031 0 0 1 1.458-1.459l1.59 1.591a1.031 1.031 0 0 1-.729 1.76Z" />
                        <path d="M12 16.781A4.782 4.782 0 1 1 16.781 12 4.787 4.787 0 0 1 12 16.781Z" />
                    </svg>
                }
                uncheckedIcon={
                    <svg width={18} height={18} fill="#4c4c4c" viewBox="0 0 24 24" style={{ margin: '2px 7px 5px 3px' }}>
                        <path d="M12.375 22.5A10.875 10.875 0 0 1 1.5 11.625c0-4.406 2.531-8.357 6.45-10.063a.75.75 0 0 1 .988.988c-.45 1.033-.688 2.356-.688 3.825 0 5.17 4.206 9.375 9.375 9.375 1.47 0 2.792-.238 3.826-.688a.751.751 0 0 1 .987.988c-1.706 3.919-5.657 6.45-10.063 6.45Z" />
                    </svg>
                }
                height={23}
                width={50}
                handleDiameter={25}
                onHandleColor="#4da6b3"
                offHandleColor="#4da6b3"
                offColor="#d9d9d9"
                onColor="#d9d9d9"
            />
        </div>
    )
}
export default ToolsBar