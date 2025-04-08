import React from 'react'
import './PageCSS/SingleCourtPage.css'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import thumb from '../assets/crt-thumb.png'
import MiniCalendar from '../Components/MiniCalendar/MiniCalendar'
import CourtAvailability from '../assets/DummyData/CourtAvailability'
import testimg from '../assets/mglery-1.png'

const SingleCourtPage = () => {

    const selectedCourt = CourtAvailability.find(court => court.id === 1);
    const slots = selectedCourt?.slots || [];

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
                <div className="slot-select-container">
                    {slots.map((slot) => (
                        <div className="singleslot-select" key={slot.slt_id}>
                            <div className="slot-time">{slot.time}</div>
                            <div className="crt-typ-btns">
                                <button
                                    id="hlf-btn"
                                    disabled={!(slot.court_type === 'half' || slot.court_type === 'full')}
                                    className={!(slot.court_type === 'half' || slot.court_type === 'full') ? 'disabled-btn' : ''}
                                >
                                    HALF COURT
                                </button>
                                <button
                                    id="fll-btn"
                                    disabled={slot.court_type !== 'full'}
                                    className={slot.court_type !== 'full' ? 'disabled-btn' : ''}
                                >
                                    FULL COURT
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="crt-resrv-info-container">
                    <div className="crt-rsv-left">
                        <h2>Prices per time slot and court type:</h2>
                        <div className="crt-rv-inf-cont">
                            <h2 className='hlfcrt-lbl'>HALF COURT</h2>
                            <h2 className='price-lbl'>4000 LKR (2 hours)</h2>
                        </div>
                        <div className="crt-rv-inf-cont">
                            <h2 className='fllcrt-lbl'>FULL COURT</h2>
                            <h2 className='price-lbl'>6000 LKR (2 hours)</h2>
                        </div>
                        <p>Additional Details:
                            <br />
                            <span>
                                Our courts are available for both full and half-court rentals, covering indoor and outdoor venues. We provide night game lighting, comfortable changing rooms, and spectator seating for an enhanced experience. Equipment rentals, including basketballs and jerseys, are available, and upon request, we offer scoreboard access and referee booking services.
                            </span>
                        </p>
                    </div>
                    <div className="crt-rsv-right">
                        <div className="add-tm-mmbs">
                            <h1>ADD TEAM MEMBERS(S)</h1>
                            <div className="add-tm-form">
                                <h2>Name</h2>
                                <h2>Contact Info</h2>
                            </div>
                            <div className="vals">

                                <div className="adtmfrm-vals">
                                    <p>Bhagya Gunaratne</p>
                                    <p>0724111125</p>
                                </div>
                                <hr />
                                <div className="adtmfrm-vals">
                                    <p>Umedha Rajaratne</p>
                                    <p>0722666900</p>
                                </div>
                                <hr />
                                <div className="adtmfrm-vals">
                                    <p>Nihal Kariyawasam</p>
                                    <p>072345899</p>
                                </div>
                                <hr />
                            </div>
                            <button>ADD</button>
                        </div>
                        <hr />
                        <div className="booking-brf">
                            <h1>BOOKING BRIEF:</h1>
                            <div className="brf-vals">
                                <h2>Selected Venue:<span>Trinity College Kandy Quadrangle</span></h2>
                                <h2>Selected Date:<span>16th Thursday, February 2025</span></h2>
                                <h2>Selected Time:<span>2:00PM - 4:00PM</span></h2>
                                <h2>Selected Court Type:<span>Half Court</span></h2>
                                <h2>Selected Court Type:<span>Half Court</span></h2>
                                <h2>Mentioned Player(s) Count:<span>3 Players</span></h2>
                            </div>
                            <button>BOOK COURT NOW
                                <i class="fa-solid fa-angle-right"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="court-galry-cont">
                    <div className="sing-crt-sec-2">
                        <h1>GALLERY</h1>
                    </div>
                    <div className="crt-gal-img-set">
                        <img src={testimg} alt="Court Gallery" />
                        <img src={testimg} alt="Court Gallery" />
                        <img src={testimg} alt="Court Gallery" />
                        <img src={testimg} alt="Court Gallery" />
                        <button><i class="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>

                <div className="wht-youd-find">
                    <div className="sing-crt-sec-2">
                        <h1>What you will find at this facility</h1>
                    </div>
                    <p>Located within the historic grounds of Trinity College Kandy, the Quadrangle Basketball Court is one of the most well-known outdoor courts in the region. Nestled in the heart of Kandy, this court has been home to generations of passionate basketball players, hosting school tournaments, training sessions, and recreational games.<br /><br />The court features a well-maintained playing surface, clear boundary markings, and standard-height hoops, making it suitable for players of all levels. Whether you are looking for a space to train, organize a friendly match, or host an inter-school competition, this facility offers an ideal setting.<br /><br />Our court is available for bookings seven days a week, with closures only on public holidays or during special school events. Limited parking is available nearby, and our staff is always ready to assist with any inquiries. The location is easily accessible, providing a convenient and professional environment for both individual players and teams.<br /><br />All booking requests can be completed online, where you will be able to check real-time availability, view pricing information, complete the booking process, and make payments securely. If you have any specific requirements or need further clarification, please feel free to use the messaging feature, and our team will be happy to assist you.<br /><br />Come experience basketball at one of Kandy’s most iconic courts, where history meets sporting excellence! 🏀🔥</p>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default SingleCourtPage
