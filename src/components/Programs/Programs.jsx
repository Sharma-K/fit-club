import React from 'react'
import './Programs.css'
import {prorgamsData} from '../../data/programsData';

const Programs = () =>{

    return(
    <div className="Programs" id="programs">
        <div className="programs-header">
            <span  className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
    </div>
    );
}

export default Programs;