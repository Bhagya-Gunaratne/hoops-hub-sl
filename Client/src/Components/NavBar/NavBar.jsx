import React from 'react'
import './NavBar.css'
import logo from '../../assets/3Agile-HoopsHub.png'
import profile from '../../assets/person1.png'

const NavBar = () => {
    return (
        <div className='nav-container'>
            <div className="logo-pane">
                <img src={logo} alt="logo" />
            </div>
            <div className="navlink-pane">
                <h2>Live Matches</h2>
                <h2>Match Gallery</h2>
                <h2>Book Court</h2>
                <h2>About Us</h2>
                <h2>Contact Us</h2>
            </div>
            <div className="search-pane">
                <input type="text" placeholder='Search Match' />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="profile-pane">
                <img src={profile} alt="profile" />
            </div>
        </div>
    )
}

export default NavBar
