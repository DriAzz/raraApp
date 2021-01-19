import React from 'react';

import SandwichGet from "../../components/SandwichGet";

class SandwichRender3 extends React.Component {
    render() {
        return (
            <div>
                <SandwichGet uri="http://localhost:3000/menu/sandwiches/3" />
            </div>
        )
    }
}

export default SandwichRender3;