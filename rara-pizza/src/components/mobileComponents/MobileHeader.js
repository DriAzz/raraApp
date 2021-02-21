import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import logo from '../../assets/raraLogo.png';
import "../../styles/mobileStyles/mobileHeader.css";
import $ from "jquery";

import PhoneBurger from "../mobileComponents/PhoneBurger";

class MobileHeader extends React.Component {
    componentDidMount() {
        $(".phoneBurgerButton").click(function () {
            $(".phoneBurgerComponent-container").css("display", "block");
        });
    }

    render() {
        return (
            <div className="mobileHeader-container">
                <div className="phoneBurger-container">
                    <div className="phoneBurgerButton-container">
                        <div className="phoneBurgerGrid-1">
                            <button className="phoneBurgerButton">
                                <i class="fas fa-bars"></i>
                            </button>
                            <img className="mobileImageLogo2" src={logo} />
                        </div>
                    </div>
                    <div className="phoneBurgerComponent-container">
                        <PhoneBurger />
                    </div>
                </div>
                <div className="mobileHeader-containerInner">
                    <div className="mobileHeader-left">
                        <div className="mobileLeftNav-container">
                            <NavLink activeClassName="" className="mobileHeader-Link"
                                exact to="/">Home</NavLink>
                        </div>
                    </div>
                    <div className="mobileHeader-middle">
                        <div className="mobileMiddleNav-container">
                            <img className="mobileImageLogo" src={logo} />
                        </div>
                    </div>
                    <div className="mobileHeader-right">
                        <div className="mobileRightNav-container">
                            <NavLink activeClassName="" className="mobileHeader-Link"
                                exact to="/menu/overview">Menu</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileHeader;