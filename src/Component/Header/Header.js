import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav><a href="/timeline">Timeline</a>
            <a href="home">Home</a>
            </nav>
        
        </div>
    );
};

export default Header;