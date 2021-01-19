import React from 'react';

import SandwichGet from "../../components/SandwichGet";

class SandwichRender1 extends React.Component {
    render() {
        return (
            <div>
                <SandwichGet uri="http://localhost:3000/menu/sandwiches/1" />
            </div>
        )
    }
}

export default SandwichRender1;