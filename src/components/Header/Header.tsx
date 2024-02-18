import { format } from 'date-fns';
import styles from './Header.module.css';
import Lottie from 'lottie-react';
import animationData from '../../assets/confetti-animation.json';

interface HeaderProps {
    doneTasksValue: number;
}

export function Header({ doneTasksValue }: HeaderProps) {
    const today = new Date();
    const formattedDate = format(today, 'dd MMM yyyy EEEE');
    const [day, month, year, dayOfWeek] = formattedDate.split(' ');

    return (
        <div className={styles.headerContentWrapper}>
            <div className={styles.headerContent}>
                <span className={styles.day} data-cy="day">{day}</span>
                <div className={styles.monthAndYear}>
                    <span data-cy="month">{month}</span>
                    <span data-cy="year">{year}</span>
                </div>
            </div>
            <div className={styles.dayOfWeekContainer}>
                <span className={styles.dayOfWeek} data-cy="dayOfWeek">{dayOfWeek}</span>
                {doneTasksValue === 100 && (
                    <div className={styles.lottieContainer}>
                        <Lottie
                            data-cy="confettiAnimation"
                            animationData={animationData}
                            loop={false}
                            autoplay
                            style={{ width: 200, height: 200 }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}