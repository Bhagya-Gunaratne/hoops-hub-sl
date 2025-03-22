import React from 'react'
import './Footer.css'
import fback from '../../assets/fimg.jpg'
import flogo from '../../assets/3Agile-HoopsHub.png'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="ft-back-inf">
                <img id='f-img' src={fback} alt="footer-background" />
                <div className="ft-sections">
                    <div className="ft-sec1">
                        <img src={flogo} alt="footer-logo" />
                        <p>
                            Bringing the basketball community together with seamless match management, real-time insights, and island-wide court bookings. Whether you're a player, coach, or fan, our platform keeps you connected to the game—anytime, anywhere.
                        </p>

                        <div className="social-icons">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-tiktok"></i>
                            <i class="fa-brands fa-threads"></i>
                        </div>
                    </div>
                    <div className="ft-sec2">
                        <h1>QUICK LINKS</h1>
                        <div className="quicklinks-1">
                            <h2>HOME</h2>
                            <h2>LIVE MATCHES</h2>
                            <h2>MATCH GALLERY</h2>
                            <h2>BOOK COURT</h2>
                            <h2>LOGIN/SIGNUP</h2>
                        </div>
                        <div className="quicklinks-2">
                            <h2>ABOUT US</h2>
                            <h2>CONTACT US</h2>
                        </div>
                    </div>
                    <div className="ft-sec3">
                        <h1>SUPPORT LINKS</h1>
                        <div className="supportlinks-1">
                            <h2>COMMUNITY</h2>
                            <h2>FAQS</h2>
                            <h2>PRIVACY POLICY</h2>
                            <h2>TERMS & CONDITIONS</h2>
                        </div>
                        <div className="supportlinks-2">
                            <h1>COPYRIGHTS</h1>
                            <h2>2025 - HOOPSHUB SL ©</h2>
                        </div>
                    </div>
                    <div className="ft-sec4">
                        <h1>QUICK CONTACT</h1>
                        <h2>SEND US YOUR SHORT INQUIRY AND GET IN TOUCH WITH OUR TEAM...</h2>
                        <div className="quick-inqs">
                            <div className="quick-inq-top">
                                <h1>YOUR EMAIL:</h1>
                                <input type="text" name="inquiry" id="inquiry" placeholder='example@gmai.com' />
                            </div>
                            <div className="quick-inq-base">
                                <textarea name="inquiry" id="inquiry" placeholder='YOUR SHORT MESSAGE:'></textarea>
                            </div>
                        </div>
                        <button>SEND</button>
                    </div>
                </div>
            </div>
            <div className="ft-btm-line"></div>
        </div>
    )
}

export default Footer
