import React from 'react'
import './SearchSection.css'

const SearchSection = () => {
  return (
    <div className='search-sec-container'>
      <div className="search-tp-sec">

        <div className="search-bn">
          <h2>Search By Name: </h2>
          <input type="text" name="search-by-name" id="search-bn" placeholder='Enter Match • Event • Venue Name' />
        </div>

        <div className="pick-dt">
          <h2>Pick Date: </h2>
          <input type="date" name="pick-date" id="pick-dt" />
        </div>

        <div className="pick-typ">
          <h2>Pick Type: </h2>
          <select>
            <option value="">Select Division</option>
            <option value="A Division">A Division</option>
            <option value="B Division">B Division</option>
            <option value="C Division">C Division</option>
            <option value="Women’s Division">Women’s Division</option>
            <option value="U-18 Boys">U-18 Boys</option>
            <option value="U-18 Girls">U-18 Girls</option>
            <option value="U-20 Boys">U-20 Boys</option>
            <option value="U-20 Girls">U-20 Girls</option>
            <option value="3x3 Division">3x3 Division</option>
            <option value="Friendly Matches">Friendly Matches</option>
            <option value="Playoffs">Playoffs</option>
            <option value="Finals">Finals</option>
          </select>
        </div>

      </div>
      <div className="search-btm-sec">
        ifuebwifuwefbiwufewi fuwefweuf wbef iwuef iefuw efiwfuw fwe bfiuewf wbife
      </div>
    </div>
  )
}

export default SearchSection
