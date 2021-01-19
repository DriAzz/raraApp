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
                                    <NavLink activeClassName="menu-active" className="navLink-overview navLinks-menu" exact to="/menu/overview">Overview</NavLink>
                                </div>
                                <div className="navLink-container">
                                    <NavLink activeClassName="menu-active" className="navLink-pizza navLinks-menu" exact to="/menu/pizzas/1">Pizzas</NavLink>
                                </div>
                                <div className="navLink-container">
                                    <NavLink activeClassName="menu-active" className="navLink-sandwiches navLinks-menu" exact to="/menu/sandwiches/1">Sandwiches</NavLink>
                                </div>
                                <div className="navLink-container">
                                    <NavLink activeClassName="menu-active" className="navLink-salads navLinks-menu" exact to="/menu/salads/1">Salads</NavLink>
                                </div>
                                <div className="navLink-container">
                                    <NavLink activeClassName="menu-active" className="navLink-appetizers navLinks-menu" exact to="/menu/appetizers/1">Appetizers & Sides</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu-rightC">
                        <Route exact path="/menu/overview" component={OverviewRender} />
                        <Route exact path="/menu/pizzas/1" component={PizzaRender} />
                        <Route exact path="/menu/sandwiches/1" component={SandwichRender} />
                        <Route exact path="/menu/salads/1" component={SaladRender} />
                        <Route exact path="/menu/appetizers/1" component={AppetizerRender} />
                    </div>
                </div>
            </div>
        </Router>
    </div>
);

export default MenuGetComponent;