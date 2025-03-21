import React from 'react'
import './MatchGalleryCard.css'
import MatchGalleryCards from '../../assets/DummyData/MatchGalleryCards'

const MatchGalleryCard = () => {
  return (
    <div className='match-gallery-container'>
      <div className="matchglry-cont-title"><h1>MATCH GALLERY</h1></div>
      <div className="matchglry-cards">

        {MatchGalleryCards.map((mGal) => (
          <div className="matchglry-card" key={mGal.id}>
            <div className="matchglry-c-img">
              <img src={mGal.image} alt="Match Gallery Card Image" />
            </div>
            <div className="matchglry-c-info">
              <h2>{mGal.name}</h2>
            </div>
          </div>
        ))}

      </div>
      <div className="ongoing-cont-extend"><i class="fa-solid fa-angle-down"></i></div>

    </div>
  )
}

export default MatchGalleryCard
