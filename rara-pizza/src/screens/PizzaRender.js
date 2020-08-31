import React from 'react';
import "../styles/globalRender.css";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import PizzaGet from "../components/PizzaGet";

const PizzaRender = () => (
    <div className="pizzaRender-container globalRender-container">
        <div className="pizzaGetTitle-container globalRenderTitle-contaier">
            <p className="pizzaGetTitle globalRenderTitle">Pizzas</p>
        </div>
        <PizzaGet uri="http://localhost:3000/menu/allpizzas" />
    </div>
);

export default PizzaRender;