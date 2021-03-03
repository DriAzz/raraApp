import React from 'react';
import "../../styles/mobileStyles/mobileParallax.css";

import MobileHomeC1 from "./MobileHomeC1";
import MobileHomeC2 from './MobileHomeC2';

class MobileParallaxC extends React.Component {
    render() {
        return (
            <div className="mobileParallax-container">
                <div className="mobileParallax-containerInnerTablet">
                    <div className="mobileContainer1">
                        <MobileHomeC1 />
                    </div>
                    <div className="mobileContainer2">
                        <MobileHomeC2 />
                    </div>
                </div>
                <div className="mobileParallax-containerInnerPhone">
                    {/* Add mobile phone elements here */}
                </div>
            </div>
        )
    }
}

export default MobileParallaxC;