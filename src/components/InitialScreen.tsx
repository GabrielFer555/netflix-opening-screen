import React, { useState } from 'react'
import NetflixLogo from '../assets/Netflix-logo.png'
import './InitialScreen.scss'

const InitialScreen = () => {
    const [email, setEmail] = useState('');

  return (
    <>
    <nav className='navbar'>
        <img src={NetflixLogo} className='netflix-logo' alt="" />
        <div className="button-box">
            <button className="sign-in-button">
                Sign-in
            </button>
        </div>
    </nav>
    <main className='main'>
        <div className="main-text">
        <h2>
        Unlimited movies, TV shows, and <br /> more.
        </h2>
        <span>Watch anywhere. Cancel anytime.</span>
        <span>Ready to watch? Enter your email to create or restart your membership.        </span>
        <div className="input-box">
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='E-mail Address' />
        <button>Get Started</button>
        </div>
        </div>
    </main>
    </>
  )
}

export default InitialScreen