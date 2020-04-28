import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Man from '../Man/Man';
import './Timeline.css'

const Timeline = () => {
     const frist5=fakeData.slice(0,6);
     const[mans, setMan]=useState(frist5);
     

    return (
        <div className="flex">
            <div className="man-container">
                {mans.map(mn =><Man man={mn}></Man>)};
            </div>
            <div className="card-container">
                <h2>My Profile</h2>
            </div>
            
        </div>
       
    );
};

export default Timeline;