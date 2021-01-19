import React from 'react';

import PizzaGet from "../../components/PizzaGet";

class PizzaRender3 extends React.Component {
    render() {
        return (
            <div>
                <PizzaGet uri="http://localhost:3000/menu/pizzas/3" />
            </div>
        )
    }
}

export default PizzaRender3;