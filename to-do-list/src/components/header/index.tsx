import { getCurrentDate } from '../../utils/GetCurrentDate/GetCurrentDate'
import './style.css'

const Header = () => {

    const { day, month, year, dayOfWeek } = getCurrentDate();
    
    return(
        <header>
            <div className='container_header'>
                <div className='container-date_header'>
                    <strong>
                        {day}
                    </strong>
                    <div className='container-month-year_header'>
                        <strong>
                            {month}
                        </strong>
                        <p>
                            {year}
                        </p>
                    </div>
                </div>
                <div className='container-dayOfweek_header'>
                    <strong>
                        {dayOfWeek}
                    </strong>
                </div>
            </div>
        </header>
    )
}
export default Header