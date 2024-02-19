import { format } from 'date-fns';
import Lottie from 'lottie-react';
import animationData from '../../assets/confetti-animation.json';
import { Day, DayOfWeek, DayOfWeekContainer, HeaderContent, HeaderContentWrapper, LottieContainer, MonthAndYear, Year } from './Header.styles';

interface HeaderProps {
    doneTasksValue: number;
}

export function Header({ doneTasksValue }: HeaderProps) {
    const today = new Date();
    const formattedDate = format(today, 'dd MMM yyyy EEEE');
    const [day, month, year, dayOfWeek] = formattedDate.split(' ');

    return (
        <HeaderContentWrapper>
            <HeaderContent>
                <Day data-cy="day">{day}</Day>
                <MonthAndYear>
                    <span data-cy="month">{month}</span>
                    <Year data-cy="year">{year}</Year>
                </MonthAndYear>
            </HeaderContent>
            <DayOfWeekContainer>
                <DayOfWeek data-cy="dayOfWeek">{dayOfWeek}</DayOfWeek>
                {doneTasksValue === 100 && (
                    <LottieContainer>
                        <Lottie
                            data-cy="confettiAnimation"
                            animationData={animationData}
                            loop={false}
                            autoplay
                            style={{ width: 200, height: 200 }}
                        />
                    </LottieContainer>
                )}
            </DayOfWeekContainer>
        </HeaderContentWrapper>
    );
}