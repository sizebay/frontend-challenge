import Calendar from '../components/Calendar'
import Filters from '../components/Filters'
import InputItem from '../components/InputItem'
import ProgressBar from '../components/ProgressBar'
import TaskMenuStyle from './../styles/taskMenu.module.css'


function TaskMenu(){
    return(
        <div className={TaskMenuStyle.main_container}>
            <div className={TaskMenuStyle.sub_container}>
                <div className={TaskMenuStyle.head}>
                    <Calendar />
                    <ProgressBar/>
                    <Filters/>
                    <InputItem/>

                </div>
            </div>
        </div>
    )
}

export default TaskMenu
