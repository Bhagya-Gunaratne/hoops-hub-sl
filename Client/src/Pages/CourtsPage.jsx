import React from 'react'
import './CourtsPage.css'
import NavBar from '../Components/NavBar/NavBar'
import SearchSection from '../Components/SearchSection/SearchSection'
import court1 from '../assets/crt-1.png'
import CourtsData from '../assets/DummyData/CourtsData'
import Footer from '../Components/Footer/Footer'

const CourtsPage = () => {
    return (
        <div className='courts-page-container'>
            <NavBar />
            <SearchSection />

            <div className="result-n-sort">
                <h2>• Search Results:</h2>

                <div className="sortsec">
                    <h2>Clear Filters</h2>
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>

            <div className="courts-container">
                {CourtsData.map((court) => (
                    <div className="single-crt-card" key={court.id}>
                        <img src={court.image} alt={court.name} />
                        <h2>{court.name.toUpperCase()}</h2>
                        <div className="moreinf-avlblty-set">
                            <button className='mrinfavblty-left'>MORE INFORMATION</button>
                            <button className={`mrinfavblty-right ${court.availability}`}>
                                {court.availability.toUpperCase()}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    )
}

export default CourtsPage
