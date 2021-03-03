import React from 'react';
import "../styles/menu.css";
import MenuGetComponent from "../components/MenuGet";

import MobileTabMenuGet from "../components/mobileComponents/MobileTabMenuGet";
import MobilePhoMenuGet from "../components/mobileComponents/MobilePhoMenuGet";

const Menu = () => (
    <div className="menuContainer">
        <div className="menuContainer-desktopView">
            <MenuGetComponent />
        </div>
        <div className="menuContainer-tabletView">
            <MobileTabMenuGet />
        </div>
        <div className="menuContainer-phoneView">
            <MobilePhoMenuGet />
        </div>
    </div>
);

export default Menu;