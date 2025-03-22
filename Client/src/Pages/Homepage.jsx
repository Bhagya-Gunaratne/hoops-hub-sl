import React from 'react'
import './Homepage.css'
import NavBar from '../Components/NavBar/NavBar'
import hero from '../assets/HeroImge.png'
import herotypo from '../assets/HeroTypo.png'
import realtimetrack from '../assets/realtime-tracking.png'
import islandwide from '../assets/islandwide-book.png'
import matchanalytics from '../assets/ai-matchanalytics.png'
import matchgallery from '../assets/match-gallery.png'
import community from '../assets/community.png'
import OngoingMatchesCard from '../Components/OngoingMatchesCard/OngoingMatchesCard'
import BookCourtsCard from '../Components/BookCourtsCard/BookCourtsCard'
import MatchGalleryCard from '../Components/MatchGalleryCard/MatchGalleryCard'
import Footer from '../Components/Footer/Footer'

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
                        <div className='hb31'>Book Islanyukid-Wide Courts</div>
                    </div>
                </div>

            </div>
            <div className="services-container">
                <img src={realtimetrack} alt="realtime" />
                <img src={islandwide} alt="islandwide" />
                <img src={matchanalytics} alt="matchanalytics" />
                <img src={matchgallery} alt="matchgallery" />
                <img src={community} alt="community" />
            </div>
            <OngoingMatchesCard />
            <BookCourtsCard />
            <MatchGalleryCard />
            <Footer />
        </div>
    )
}

export default Homepage
