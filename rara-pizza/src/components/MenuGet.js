import React from 'react';
import "../styles/menuGet.css";

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import PizzaRender from "../screens/PizzaRender";
import OverviewRender from "../screens/OverviewRender";
import SandwichRender from '../screens/SandwichRender';
import SaladRender from '../screens/SaladRender';
import AppetizerRender from '../screens/AppetizerRender';


const MenuGetComponent = () => (
    <div className="menuCom-container">
        <Router>
            <div className="menu-box">
                <div className="menuHeight-box">
                    <div className="menu-leftC">
                        <div className="menu-leftC-line">
                            <div className="menu-leftC-inner">
                                <div className="navLink-container">
                                    <NavLink activeClassName="menu-active" className="navLink-overview navLinks-menu" exact to="/menu">Overview</NavLink>
                                </div>
                                <div className="navLink-container">
                                    <NavLink activeClassName="menu-active" className="navLink-pizza navLinks-menu" exact to="/menu/pizzas">Pizzas</NavLink>
                                </div>
                                <div className="navLink-container">
                                    <NavLink activeClassName="menu-active" className="navLink-sandwiches navLinks-menu" exact to="/menu/sandwiches">Sandwiches</NavLink>
                                </div>
                                <div className="navLink-container">
                                    <NavLink activeClassName="menu-active" className="navLink-salads navLinks-menu" exact to="/menu/salads">Salads</NavLink>
                                </div>
                                <div className="navLink-container">
                                    <NavLink activeClassName="menu-active" className="navLink-appetizers navLinks-menu" exact to="/menu/appetizers">Appetizers & Sides</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu-rightC">
                        <Route exact path="/menu/" component={OverviewRender} />
                        <Route path="/menu/pizzas/" component={PizzaRender} />
                        <Route path="/menu/sandwiches" component={SandwichRender} />
                        <Route exact path="/menu/salads" component={SaladRender} />
                        <Route exact path="/menu/appetizers" component={AppetizerRender} />
                    </div>
                </div>
            </div>
        </Router>
    </div>
);

export default MenuGetComponent;