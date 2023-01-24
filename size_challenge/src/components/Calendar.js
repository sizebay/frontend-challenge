import styles from './../styles/calendar.module.css'
import { DisplayFlex } from './../styles' 

function Calendar(){
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const weekday = date.getDay()
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 
    return(
        <DisplayFlex jc="space-between ">
            <DisplayFlex jc="space-between ">
                <label className={styles.day}>{day}</label>
                <DisplayFlex fd="column">
                    <label className={styles.month}>{months[month]}</label>
                    <label className={styles.year}>{year}</label>
                </DisplayFlex>
            </DisplayFlex>
            <div className={styles.weekDay}>
                <label>{weekdays[weekday]}</label>
            </div>
        </DisplayFlex>
    )
}

export default Calendar