import { ReactNode } from 'react'
import './style.css'

interface IListTasksProps{
    children: ReactNode;
}

const ListTasks = ({ children }: IListTasksProps) => {
    
    return(
        <div className='listTasks'>
            {children}
        </div>
    )
}
export default ListTasks