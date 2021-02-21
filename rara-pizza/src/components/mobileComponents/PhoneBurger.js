import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import "../../styles/mobileStyles/phoneBurger.css";
import $ from 'jquery';

class PhoneBurger extends React.Component {
    componentDidMount() {
        $(".burgerButtonClose").click(function () {
            $(".phoneBurgerComponent-container").css("display", "none");
        });
    }

    render() {
        return (
            <div className="phoneBurger-main">
                <div className="phoneBurgerNav-container">
                    <div className="burgerButtonNav-container">
                        <button className="burgerButtonClose">X</button>
                    </div>
                    <div className="burgerNav-container">
                        <NavLink activeClassName=""
                            exact to="/" className="burgerNav-link">Home</NavLink>
                    </div>
                    <div className="phoneBurgerNav-container">
                        <NavLink activeClassName=""
                            exact to="/menu/overview" className="burgerNav-link">Menu</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default PhoneBurger;