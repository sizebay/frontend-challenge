import styles from '../css/Headline.module.css'

function Headline(){
    return (
        <div id="container" className={styles.headlineContainer}>
            <h1 className={styles.day}>{date.getDate()}</h1>
            <h3 className={styles.month}>{month.substring(0, month.length - 1)}</h3>
            <h3 className={styles.year}>{date.getFullYear()}</h3>
            <div>
                <h2 className={styles.dayOfTheWeek}>{day}</h2>
            </div>
        </div>
    )
        
}

const date = new Date();
const month = date.toLocaleString('default', { month: 'short' });
const day = date.toLocaleString('default', { weekday: 'long' });    

export default Headline;