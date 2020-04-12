import React from 'react';
import './Man.css'

const Man = (props) => {
    const {img, name,email,salary}=props.man
    return (
        <div className="man">
            <div className="many">
               <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="man-name">{name}</h4>
                <h3>{email}</h3>
                 <h5>${salary}</h5>
                 <button className="bln">Add</button>
            </div>
        </div>
    );
};

export default Man;