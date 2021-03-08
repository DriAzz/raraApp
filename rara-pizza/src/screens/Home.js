import React from 'react';

import ParallaxComponent from '../components/ParallaxC';
import MobileParallaxC from '../components/mobileComponents/MobileParallaxC';
import MobilePhoParallaxC from '../components/mobileComponents/MobilePhoParallaxC';

import "../styles/home.css";


const Home = () => (
    <div className="homeContainer">
        <div className="bigScreenRender">
            <ParallaxComponent />
        </div>
        <div className="mobileScreenRender">
            <MobileParallaxC />
        </div>
        <div className="mobilePhoScreenRender">
            <MobilePhoParallaxC />
        </div>
    </div>
);

export default Home;