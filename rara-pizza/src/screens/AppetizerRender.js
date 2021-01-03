import React from 'react';
import "../styles/globalRender.css";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import AppetizersGet from "../components/AppetizerGet";
import SidesGet from "../components/SidesGet";

const AppetizerRender = () => (
    <div className="appetizerRender-container globalRender-container">
        <div className="appetizerGetTitle-container globalRenderTitle-container">
            <p className="appetizerGetTitle globalRenderTitle">Appetizers & Sides</p>
        </div>
        <div className="appetizerGrid-container globalGrid-container">
            <div className="appetizerGrid-leftC globalGrid-leftC">
                <AppetizersGet uri="http://localhost:3000/menu/allappetizers" />
            </div>
            <div className="appetizerGrid-rightC globalGrid-rightC">
                <SidesGet uri="http://localhost:3000/menu/allsides" />
            </div>
        </div>
    </div>
);

export default AppetizerRender;