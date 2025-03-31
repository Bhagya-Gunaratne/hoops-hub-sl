import React, { useState } from 'react'
import './MiniCalendar.css'

const MiniCalendar = () => {

    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [selectedDate, setSelectedDate] = useState(null);

    const daysOfWeek = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const handlePrevMonth = () => {
        setCurrentMonth(prev => (prev === 0 ? 11 : prev - 1));
        setCurrentYear(prev => (currentMonth === 0 ? prev - 1 : prev));
    };

    const handleNextMonth = () => {
        setCurrentMonth(prev => (prev === 11 ? 0 : prev + 1));
        setCurrentYear(prev => (currentMonth === 11 ? prev + 1 : prev));
    };

    const handleDateClick = (day) => {
        if (new Date(currentYear, currentMonth, day) > today) {
            setSelectedDate(day);
        }
    };

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const totalDays = getDaysInMonth(currentMonth, currentYear);
    const daysArray = Array.from({ length: firstDay }, () => '');
    for (let i = 1; i <= totalDays; i++) {
        daysArray.push(i);
    }


    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <span>{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}</span>
                <div>
                    <button onClick={handlePrevMonth}>&lt;</button>
                    <button onClick={handleNextMonth}>&gt;</button>
                </div>
            </div>
            <div className="calendar-days">
                {daysOfWeek.map(day => <span key={day}>{day}</span>)}
            </div>
            <div className="calendar-grid">
                {daysArray.map((day, index) => (
                    <div
                        key={index}
                        className={`calendar-day ${day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear() ? 'current-day' : ''} ${day < today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear() ? 'past-day' : ''} ${selectedDate === day ? 'selected-day' : ''}`}
                        onClick={() => handleDateClick(day)}
                    >
                        {day}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MiniCalendar
