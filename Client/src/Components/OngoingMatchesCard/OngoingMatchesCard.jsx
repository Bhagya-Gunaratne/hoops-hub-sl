import React from 'react'
import './OngoingMatchesCard.css'
import sampleImage from '../../assets/ongoing-sample1.png'

const OngoingMatchesCard = () => {
    return (
        <div className='ongoing-container'>
            <div className="ongoing-cont-title"><h1>ONGOING MATCHES</h1></div>
            <div className="ongoin-cards">
                <div className="ongoin-card">
                    <div className="ongoing-c-img">
                        <img src={sampleImage} alt="ongoing-card-image" />
                    </div>
                    <div className="ongoing-c-info">
                        <h2>Aitken Spence vs. <br></br >WSO2 Lanka - 24 FEB 2025</h2>
                    </div>
                </div>
                <div className="ongoin-card">2</div>
                <div className="ongoin-card">3</div>
                <div className="ongoin-card">4</div>
            </div>
            <div className="ongoing-cont-extend"><i class="fa-solid fa-angle-down"></i></div>
        </div>
    )
}
import './OngoingMatchesCard.css'

export default OngoingMatchesCard
