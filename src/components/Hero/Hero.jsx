import React from 'react'
import Header from '../Header/Header';
import './Hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
const Hero = () => {
    return (
        <div className='hero'>
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <div></div>
                    <span>The best fitness club in the town</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>

                    <div>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum unde amet reprehenderit. Eum molestiae enim perferendis magnam molestias officia repellat.
                        </span>
                    </div>
                </div>

                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>Members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>

            </div>
            <div className="right-h">
                <button className='btn'>Join Now</button>

                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Hear Rate</span><span>116 ppm</span>
                </div>
                <img src={hero_image} alt="" className='hero-image' />
                <img src={hero_image_back} alt="" className='hero-image-back' />

             <div className="calories">
                <img src={Calories} alt="" />
                <div>
                <span>Calories Burned </span>
                <span>228 kCal</span>
                </div>
             </div>

            </div>
        </div>
    );
}

export default Hero;