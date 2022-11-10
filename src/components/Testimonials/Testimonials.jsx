import React from 'react'
import './Testimonials.css'
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png'
import {testimonialsData} from '../../data/testimonialsData';
const Testimonials = () => {

const [selected, setSelected] = React.useState(0);
const tLength =  testimonialsData.length;

    return(
       <div className="Testimonials">
        <div className="left-t">
            <span >Testimonials </span>
            <span className='stroke-text'>What they</span>
            <span> say about us</span>
            <span>
                {testimonialsData[selected].review}
            </span>
            <span>
            <span style={{color: 'var(--orange'}}>
                {testimonialsData[selected].name }
            </span>{" "}
             - {testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-t">
            <div></div>
            <div></div>
            <img src={testimonialsData[selected].image} alt="" />
            <div className="arrows">
                <img src={leftArrow} onClick={()=>{
                    selected===0?selected(tLength-1):setSelected((prev)=>prev-1);
                }} alt="" />
                <img src={rightArrow} onClick={()=>{
                    selected===tLength-1?selected(0):setSelected((prev)=>prev+1);
                }} alt="" />
            </div>
        </div>
       </div>
    )
}

export default Testimonials;