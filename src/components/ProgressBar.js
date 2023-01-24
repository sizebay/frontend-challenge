import styles from '../css/ProgressBar.module.css'

function ProgressBar({percentage}){
    const widthStyle = {
        width: `${percentage}%`
    }

    return(
        <div className={styles.containerStyles}>
            <div style={widthStyle} className={styles.fillerStyles}>
            </div>
        </div>
    )
}

export default ProgressBar;