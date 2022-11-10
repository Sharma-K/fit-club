import React from 'react'
import Header from '../Header/Header';
import './Hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';
const Hero = () => {

    const mobile = window.innerWidth<=780?true:false;
    const transition  = {type: 'spring', duration: 3}
    return (
        <div className='hero'>
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                
                <div className="the-best-ad">
                    <motion.div
                      initial = {{left:mobile? '178px':'238px'}}
                      whileInView = {{left: '8px'}}
                      transition={{...transition, type: 'tween'}}
                    ></motion.div>
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
                        <span>
                            <NumberCounter
                            end={140} 
                            start={100}
                             delay='3'
                              preFix="+"/>
                        </span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter
                            end={978} 
                            start={800}
                             delay='3'
                              preFix="+"/>
                        </span>
                        <span>Members joined</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter
                            end={50} 
                            start={0}
                             delay='2'
                              preFix="+"/>
                        </span>
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

                <motion.div
                initial= {{right: "-1rem"}}
                whileInView={{right: "4rem"}}
                transition={transition}
                 className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Hear Rate</span><span>116 ppm</span>
                </motion.div>
                <img src={hero_image} alt="" className='hero-image' />
                <motion.img
                initial={{right:'11rem'}}
                whileInView={{right:'28rem'}}
                transition={transition}
                 src={hero_image_back} alt="" className='hero-image-back' />

             <motion.div 
             initial={{right: "40rem"}}
             whileInView={{right: "32rem"}}
             transition={transition}
             className="calories">
                <img src={Calories} alt="" />
                <div>
                <span>Calories Burned </span>
                <span>228 kCal</span>
                </div>
             </motion.div>

            </div>
        </div>
    );
}

export default Hero;