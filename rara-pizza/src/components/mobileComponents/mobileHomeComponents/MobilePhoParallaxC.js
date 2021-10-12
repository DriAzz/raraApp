import React from 'react';

import "../../../styles/mobileStyles/mobilePhoParallax.css";
import "../../../styles/mobileStyles/mobileHomeC1.css"
import "../../../styles/mobileStyles/mobileHomeC2.css"

import HelpWanted from "../../HelpWanted";
import MobileHomeC1 from "../../mobileComponents/mobileHomeComponents/MobileHomeC1";
import MobileHomeC2 from "../../mobileComponents/mobileHomeComponents/MobileHomeC2";

class MobilePhoParallaxC extends React.Component {
    render() {
        return (
            <div className="mobilePhoParallax-container">
                <div className="mobilePhoParallax-containers mobilePhoParallax-container1">
                    <MobileHomeC1 />
                </div>
                <div className="mobilePhoParallax-containers mobilePhoParallax-container2">
                    <MobileHomeC2 />
                </div>
                <div className="mobilePhoParallax-containers mobilePhoParallax-container3">
                    <HelpWanted />
                </div>
            </div>
        )
    }
}

export default MobilePhoParallaxC;