import React, { useState } from 'react'
import './PageCSS/MatchInfoPage.css'
import matchimage from '../assets/mtdtg-1.png'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import MatchData from '../assets/DummyData/MatchData'

const MatchInfoPage = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [visibleImages, setVisibleImages] = useState(12);

    const handleShowMore = () => {
        setVisibleImages(visibleImages + 12);
    };


    return (
        <div className='match-info-container'>
            <NavBar />
            <div className="match-breif-container">
                {(!MatchData || MatchData.id !== 1) ? (
                    <div className="loading-state">Loading Match Data...</div>
                ) : (
                    <>
                        <div className="matbc-title">
                            <h1>{MatchData.title}</h1>
                            <img src={matchimage} alt="Match Title Image" />
                        </div>
                        <div className={`matbc-inf-set ${isExpanded ? "expanded" : ""}`}>
                            <div className={`matbc-img-typo ${isExpanded ? "expanded" : ""}`}>
                                <img src={MatchData.match_thumbnail} alt="Match Image Thumbnail" />
                                <p dangerouslySetInnerHTML={{ __html: MatchData.paragraph }} />
                            </div>
                            <button onClick={() => setIsExpanded(!isExpanded)}>
                                <i className={`fa-solid fa-angle-${isExpanded ? "up" : "down"}`}></i>
                            </button>
                        </div>
                        <div className="gallery-container">
                            <div className="gc-title">
                                <h1>MATCH GALLERY</h1>
                            </div>
                            <div className="gc-images">
                                {MatchData.gallery.slice(0, visibleImages).map((imgSrc, i) => (
                                    <div className="gc-img" key={i}>
                                        <img src={imgSrc} alt={`Gallery image ${i + 1}`} />
                                    </div>
                                ))}
                            </div>
                            {visibleImages < MatchData.gallery.length && (
                                <button onClick={handleShowMore}>
                                    <i className={'fa-solid fa-angle-down'}></i>
                                </button>
                            )}
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default MatchInfoPage
