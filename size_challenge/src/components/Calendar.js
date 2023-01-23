import styles from './../styles/calendar.module.css'

function Calendar(){
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const weekday = date.getDay()
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 
    return(
        <div className={styles.main_container}>
            <div className={styles.main_container}>
                <label className={styles.day}>{day}</label>
                <div className={styles.sub_container}>
                    <label className={styles.month}>{months[month]}</label>
                    <label className={styles.year}>{year}</label>
                </div>
            </div>
            <div className={styles.weekDay}>
                <label>{weekdays[weekday]}</label>
            </div>
        </div>
    )
}

export default Calendar