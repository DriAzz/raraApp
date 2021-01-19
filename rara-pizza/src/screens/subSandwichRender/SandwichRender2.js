import React from 'react';

import SandwichGet from "../../components/SandwichGet";

class SandwichRender2 extends React.Component {
    render() {
        return (
            <div>
                <SandwichGet uri="http://localhost:3000/menu/sandwiches/2" />
            </div>
        )
    }
}

export default SandwichRender2;