import React from 'react'
import './Homepage.css'
import NavBar from '../Components/NavBar/NavBar'
import hero from '../assets/HeroImge.png'
import herotypo from '../assets/HeroTypo.png'

const Homepage = () => {
    return (
        <div className='homepage-container'>
            <NavBar />
            <div className="hero-container">
                <img id='hero' src={hero} alt="hero" />
                <img id='hero-typo' src={herotypo} alt="herotypo" />
                <div className="hero-btns">
                    <div className="hb1set">
                        <div className='hb11'>Explore Teams & Players</div>
                        <div className='hb12'>Upcoming Events</div>
                    </div>
                    <div className="hb2set">
                        <div className='hb21'>Join as a Coach</div>
                        <div className='hb22'>Register as a Player</div>
                    </div>
                    <div className="hb3set">
                        <div className='hb31'>Book Island-Wide Courts</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
