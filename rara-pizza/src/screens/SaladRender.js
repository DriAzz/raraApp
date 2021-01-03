import React from 'react';
import "../styles/globalRender.css";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import SaladGet from "../components/SaladGet";

const SaladRender = () => (
    <div className="saladRender-container globalRender-container">
        <div className="saladGetTitle-container globalRenderTitle-container">
            <p className="saladGetTitle globalRenderTitle">Salads</p>
        </div>
        <SaladGet uri="http://localhost:3000/menu/allsalads" />
    </div>
);

export default SaladRender;