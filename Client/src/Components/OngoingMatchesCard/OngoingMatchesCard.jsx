import React from 'react'
import './OngoingMatchesCard.css'
import OngoingMatches from '../../assets/DummyData/OngoingMatches.js'

const OngoingMatchesCard = () => {

    return (
        <div className='ongoing-container'>
            <div className="ongoing-cont-title"><h1>ONGOING MATCHES</h1></div>
            <div className="ongoin-cards">

                {OngoingMatches.map((ongMatch) => (
                    <div className="ongoin-card" key={ongMatch.id}>
                        <div className="ongoing-c-img">
                            <img src={ongMatch.image} alt="ongoing-match" />
                        </div>
                        <div className="ongoing-c-info">
                            <h2>{ongMatch.teams} <br></br> {ongMatch.date}</h2>
                        </div>
                    </div>
                ))}

            </div>
            <div className="ongoing-cont-extend"><i class="fa-solid fa-angle-down"></i></div>
        </div>
    )
}

export default OngoingMatchesCard
