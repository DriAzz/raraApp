import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import logo from '../assets/raraLogo.png';

const Header = () => (
    <div className="headerContainer">
        <div className="leftContainer">
            <div className="numberContainer">
                <img className="imageLogo" src={logo} />
                {/* Add Phone Icon Here */}
                <div className="phoneNumberContainer">
                    <i class="fas fa-phone"></i>
                    <p className="phoneNumber">+1(406)-272-6971</p>
                </div>
            </div>
        </div>
        <div className="rightContainer">
            <div className="NavLinkContainer">
                <NavLink className="NavLinks" activeClassName="NavActive" to="/about">About</NavLink>
                <NavLink className="NavLinks" activeClassName="NavActive" to="/menu">Menu</NavLink>
                <NavLink exact className="NavLinks" activeClassName="NavActive" to="/">Home</NavLink>
            </div>
        </div>
    </div>
);

export default Header