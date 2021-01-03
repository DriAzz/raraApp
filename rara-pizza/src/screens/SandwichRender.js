import React from 'react';
import "../styles/globalRender.css";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import SandwichGet from "../components/SandwichGet";

const SandwichRender = () => (
    <div className="sandwichRender-container globalRender-container">
        <div className="sandwichGetTitle-container globalRenderTitle-container">
            <p className="sandwichGetTitle globalRenderTitle">Sandwiches</p>
        </div>
        <SandwichGet uri="http://localhost:3000/menu/allsandwiches" />
    </div>
);

export default SandwichRender;