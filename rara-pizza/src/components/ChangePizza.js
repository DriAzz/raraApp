import React from 'react';
import ReactDOM from 'react-dom';

import PizzaGet from "../components/PizzaGet";

class ChangePizza extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                
            </button>
        )
    }
}

export default ChangePizza;