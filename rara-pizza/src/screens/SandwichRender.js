import React from 'react';
import "../styles/globalRender.css";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import SandwichRender1 from "../screens/subSandwichRender/SandwichRender1";
import SandwichRender2 from "../screens/subSandwichRender/SandwichRender2";
import SandwichRender3 from "../screens/subSandwichRender/SandwichRender3";

const SandwichRender = () => (
    <div className="sandwichRender-container globalRender-container">
        <Router>
            <div className="sandwichGetTitle-container globalRenderTitle-contaier">
                <p className="sandwichGetTitle globalRenderTitle">Sandwiches</p>
            </div>
            <div className="sandwichLink-container globalLink-container">
                <Route exact path="/menu/sandwiches/1" component={SandwichRender1} />
                <Route exact path="/menu/sandwiches/2" component={SandwichRender2} />
                <Route exact path="/menu/sandwiches/3" component={SandwichRender3} />
            </div>
            <div className="globalLink-container">
                <div className="sandwichButton-container globalLink-containerInner">
                    <div className="sandwichNavLink-container globalButton-container">
                        <div className="globalButton-containerInner">
                            <NavLink activeClassName="" className="globalNavLink globalNavLinks-menu"
                                exact to="/menu/sandwiches/1">1</NavLink>
                        </div>
                    </div>
                    <div className="sandwichNavLink-container globalButton-container">
                        <div className="globalButton-containerInner">
                            <NavLink activeClassName="" className="globalNavLink globalNavLinks-menu"
                                exact to="/menu/sandwiches/2">2</NavLink>
                        </div>
                    </div>
                    <div className="sandwichNavLink-container globalButton-container">
                        <div className="globalButton-containerInner">
                            <NavLink activeClassName="" className="globalNavLink globalNavLinks-menu"
                                exact to="/menu/sandwiches/3">3</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    </div>
);

export default SandwichRender;