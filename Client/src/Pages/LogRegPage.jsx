import React from 'react'
import './PageCSS/LogRegPage.css'
import backimg from '../assets/istockphoto-1157120257-170667a 1.png'
import logo from '../assets/3Agile-HoopsHub.png'
import lgart from '../assets/lgart.png'

const LogRegPage = () => {
    return (
        <div className='logreg-container'>
            <img id='backimg' src={backimg} alt="Background Image" />
            <img id='logoimg' src={logo} alt="Logo" />
            <div className="login-register-container">
                <div className="login-sect">
                    <h1>Welcome Back <span><img src={lgart} alt="Login Art" /></span></h1>
                    <h2>To keep connected with us please login with your personal information by email address and password</h2>
                    <input type="text" name="email" id="email" placeholder='Email:' />
                    <input type="password" name="password" id="password" placeholder='Password:' />
                    <button>LOGIN</button>
                    <p id='forgotp'>Forgot Password?</p>
                    <hr />
                    <h3>New To HoopsHub?</h3>
                    <p>Register by clicking the button and join our vibrant community today! Gain access to exclusive features, exciting updates, and a seamless experience. <br /> <br /> Don't miss out—be part of something amazing! 🏀❤️</p>
                </div>
                <div className="register-sect"></div>
            </div>
        </div>
    )
}

export default LogRegPage
