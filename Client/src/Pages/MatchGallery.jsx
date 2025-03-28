import React from 'react'
import SearchSection from '../Components/SearchSection/SearchSection'
import './MatchGallery.css'
import NavBar from '../Components/NavBar/NavBar'

const MatchGallery = () => {
  return (
    <div className='matchgallery-page-container'>
      <NavBar/>
      <SearchSection/>
    </div>
  )
}

export default MatchGallery
