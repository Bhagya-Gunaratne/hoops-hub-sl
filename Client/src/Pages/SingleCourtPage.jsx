import React from 'react'
import './PageCSS/SingleCourtPage.css'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import thumb from '../assets/crt-thumb.png'
import MiniCalendar from '../Components/MiniCalendar/MiniCalendar'

const SingleCourtPage = () => {
    return (
        <div className='single-court-page-container'>
            <NavBar />
            <div className="single-court-container">
                <div className="sing-crt-sec-1">
                    <img src={thumb} alt="Thumb Image" />
                    <div className="sing-crt-s1-right">
                        <h1>TRINITY COLLEGE KANDY QUADRANGLE</h1>
                        <h2>AVAILABLE</h2>
                        <MiniCalendar />
                        <p>*Faded dates of other next month could be available if you move to the next month. Other faded dates and dates that are colored in red are unavailable.</p>
                    </div>
                </div>
                <div className="sing-crt-sec-2">
                    <h1>COURT RESERVING INFORMATION</h1>
                    <h2>Selected Date: <span> 16th Thursday, February 2025</span></h2>
                    <h2>Select preferred time slot(s) and court type: </h2>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default SingleCourtPage
