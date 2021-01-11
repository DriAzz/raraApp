import React from 'react';
import "../styles/globalRender.css";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// import ChangePizza from "../components/ChangePizza";
import PizzaGet from "../components/PizzaGet";

class PizzaRender extends React.Component {

    // state = {
    //     uri: "http://localhost:3000/menu/pizzas/",
    //     uriExt: 1
    // }




    render() {
        return (
            <div className="pizzaRender-container globalRender-container">
                <div className="pizzaGetTitle-container globalRenderTitle-contaier">
                    <p className="pizzaGetTitle globalRenderTitle">Pizzas</p>
                </div>
                <div className="pizzaLink-container globalLink-container">
                    <PizzaGet uri="http://localhost:3000/menu/pizzas/1" />
                </div>
            </div>
        )
    }
}

export default PizzaRender;