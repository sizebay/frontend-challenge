import React from 'react'

function DateHeader() {
    
    const date = new Date();
    const month = date.toLocaleString('en-GB', { month: "short" });
    const dayOfTheWeek = date.toLocaleString('en-GB', { weekday: 'long' });

    return (
        <header className='date-header'>
            <div className='day-header'>
                <div className='day' >{date.getUTCDate().toString()}</div>
                <div className='month-year'>
                    <div>{month}</div>
                    <div>{date.getUTCFullYear().toString()}</div>
                </div>
            </div>
            <h1 className='day-extended'>{dayOfTheWeek}</h1>
        </header>
    )
}

export default DateHeader