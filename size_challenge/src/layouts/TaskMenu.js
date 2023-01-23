import Calendar from '../components/Calendar'
import ProgressBar from '../components/ProgressBar'
import TaskMenuStyle from './../styles/taskMenu.module.css'


function TaskMenu(){
    return(
        <div className={TaskMenuStyle.main_container}>
            <div className={TaskMenuStyle.sub_container}>
                <div className={TaskMenuStyle.head}>
                    <Calendar />
                    <ProgressBar/>
                </div>
            </div>
        </div>
    )
}

export default TaskMenu
