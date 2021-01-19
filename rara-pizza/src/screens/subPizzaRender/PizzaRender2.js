import React from 'react';

import PizzaGet from "../../components/PizzaGet";

class PizzaRender2 extends React.Component {
    render() {
        return (
            <div>
                <PizzaGet uri="http://localhost:3000/menu/pizzas/2" />
            </div>
        )
    }
}

export default PizzaRender2;