import React from 'react';

import PizzaGet from "../../components/PizzaGet";

class PizzaRender1 extends React.Component {
    render() {
        return (
            <div>
                <PizzaGet uri="http://localhost:3000/menu/pizzas/1" />
            </div>
        )
    }
}

export default PizzaRender1;