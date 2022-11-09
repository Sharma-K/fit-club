import React from 'react'
import Header from '../Header/Header';
import './Hero.css'
const Hero = () => {
    return (
        <div className='hero'>
           <div className="left-h">
            <Header />
            <div className="the-best-ad">
            <div></div>
            <span>The best fitness club in the town</span>
           </div>
           </div>
           <div className="right-h">Right Side</div>
            </div>
    );
}

export default Hero;