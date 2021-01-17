import React from 'react';
import "../styles/globalRender.css";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import PizzaGet from "../components/PizzaGet";

class PizzaRender extends React.Component {




    render() {
        return (
            <div className="pizzaRender-container globalRender-container">
                <div className="pizzaGetTitle-container globalRenderTitle-contaier">
                    <p className="pizzaGetTitle globalRenderTitle">Pizzas</p>
                </div>
                <div className="pizzaLink-container globalLink-container">
                    <PizzaGet uri="http://localhost:3000/menu/pizzas/1" />
                </div>
                <div className="pizzaButton-container globalLink-container">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
            </div>
        )
    }
}

export default PizzaRender;