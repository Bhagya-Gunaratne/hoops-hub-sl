import React from 'react'
import './BookCourtsCard.css'
import BookCourtCards from '../../assets/DummyData/BookCourtCards.js'

const BookCourtsCard = () => {
    return (
        <div className='bookcourt-container'>
            <div className="bkc-info">
                <h1>
                    FIND THE <span class="perfcrt">PERFECT COURT</span><br />
                    <span class="antmeanywhr">ANYTIME, ANYWHERE</span>
                </h1>
                <hr />
                <h1>
                    BOOK <span class="ilsndwde">ISLAND-WIDE</span> WITH EASE<br />
                    <span class="highlight">PLAY MORE, WAIT LESS!</span>
                </h1>
            </div>
            <div className="bkc-cards">
                {BookCourtCards.map((BCourt) => (
                    <div className="bkc-card" key={BCourt.id}>
                        <img src={BCourt.image} alt="Book-court-image" />
                        <h1>{BCourt.name}</h1>
                    </div>
                ))}
                <div className="boock-court-extend">
                    <i class="fa-solid fa-angle-right"></i>
                </div>
            </div>
        </div>
    )
}

export default BookCourtsCard
