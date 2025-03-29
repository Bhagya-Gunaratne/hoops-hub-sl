import React from 'react'
import SearchSection from '../Components/SearchSection/SearchSection'
import './MatchGallery.css'
import NavBar from '../Components/NavBar/NavBar'
import MatchGalleryData from '../assets/DummyData/MatchGalleryData'
import Footer from '../Components/Footer/Footer'

const MatchGallery = () => {
  return (
    <div className='matchgallery-page-container'>
      <NavBar />
      <SearchSection />

      <div className="result-n-sort">
        <h2>• Search Results:</h2>

        <div className="sortsec">
        <h2>SORT:</h2>
          <select>
            <option value="latest">Latest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      <div className="match-gallery-sec">
        {MatchGalleryData.map((match) => (
          <div className="mtch-gal-single" key={match.id}>
            <div className="mtch-gl-top">
              <div className="gl-tp-left">
                <img src={match.image} alt={match.name} />
              </div>
              <div className="gl-tp-right">
                <img src={match.image} alt="Gallery Card Image" />
                <div className="gl-inf-set">
                  <h1>{match.name}</h1>
                  <h2>{match.date}</h2>
                  <h3>{match.place}</h3>
                </div>
              </div>
            </div>
            <div className="mtch-gl-bottom">
              <p dangerouslySetInnerHTML={{ __html: match.parag }}></p>
            </div>
          </div>
        ))}
      </div>

      <Footer/>
    </div>
  )
}

export default MatchGallery
