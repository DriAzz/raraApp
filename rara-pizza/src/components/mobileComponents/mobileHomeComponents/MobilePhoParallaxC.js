import React from 'react';
import "../../../styles/mobileStyles/mobilePhoParallax.css";

import HelpWanted from "../../HelpWanted";

class MobilePhoParallaxC extends React.Component {
    render() {
        return(
            <div className="mobilePhoParallax-container">
                <div className="mobilePhoParallax-">
                    <h1>Pizza Spec</h1>
                </div>
                <div className="mobilePhoParallax-">
                    <h1>Car Spec</h1>
                </div>
                <div className="mobilePhoParallax-">
                    <h1>Hours</h1>
                </div>
                <div className="mobilePhoParallax">
                   <HelpWanted /> 
                </div>
            </div>
        )
    }
}

export default MobilePhoParallaxC;