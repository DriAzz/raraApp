import React from 'react';
import "../styles/globalRender.css";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import PizzaRender1 from "../screens/subPizzaRender/PizzaRender1";
import PizzaRender2 from "../screens/subPizzaRender/PizzaRender2";
import PizzaRender3 from "../screens/subPizzaRender/PizzaRender3";

class PizzaRender extends React.Component {

    render() {
        return (
            <div className="pizzaRender-container globalRender-container">
                <Router>
                    <div className="pizzaGetTitle-container globalRenderTitle-contaier">
                        <p className="pizzaGetTitle globalRenderTitle">Pizzas</p>
                    </div>
                    <div className="pizzaLink-container globalLink-container">
                        <Route exact path="/menu/pizzas/1" component={PizzaRender1} />
                        <Route exact path="/menu/pizzas/2" component={PizzaRender2} />
                        <Route exact path="/menu/pizzas/3" component={PizzaRender3} />
                    </div>
                    <div className="globalLink-container">
                        <div className="pizzaButton-container globalLink-containerInner">
                            <div className="pizzaNavLink-container globalButton-container">
                                <div className="globalButton-containerInner">
                                    <NavLink activeClassName="" className="globalNavLink globalNavLinks-menu"
                                        exact to="/menu/pizzas/1">1</NavLink>
                                </div>
                            </div>
                            <div className="pizzaNavLink-container globalButton-container">
                                <div className="globalButton-containerInner">
                                    <NavLink activeClassName="" className="globalNavLink globalNavLinks-menu"
                                        exact to="/menu/pizzas/2">2</NavLink>
                                </div>
                            </div>
                            <div className="pizzaNavLink-container globalButton-container">
                                <div className="globalButton-containerInner">
                                    <NavLink activeClassName="" className="globalNavLink globalNavLinks-menu"
                                        exact to="/menu/pizzas/3">3</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

export default PizzaRender;