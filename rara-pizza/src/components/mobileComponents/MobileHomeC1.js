import React from 'react';
import "../../styles/mobileStyles/mobileHomeC1.css";

class MobileHomeC1 extends React.Component {
    render() {
        return (
            <div className="mobileHomeC1-main">
                <div className="mobileHomeC1-gridC">
                    <div className="mobileHomeC1-grid">
                        <div className="mobileHomePizzaSpec-C1">
                            <div className="mobileHomePizzaSpecName-C1">
                                <p className="mobileHomePizzaSpecName">Weekly Pizza Special</p>
                            </div>
                            <div className="mobileHomePizzaSpecPizza-C1">
                                <p className="mobileHomePizzaSpecPizza">16" One Topper Pizza</p>
                            </div>
                            <div className="mobileHomePizzaSpecBreadstick-C1">
                                <p className="mobileHomePizzaSpecBreadstick">Bacon Bread Sticks</p>
                            </div>
                            <div className="mobileHomePizzaSpecPrice-C1">
                                <div className="mobileHomePizzaSpecPrice-C1InnerBack">
                                    <div className="mobileHomePizzaSpecPrice-C1Inner">
                                        <p className="mobileHomePizzaSpecPrice"><b>$22.48</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobileHomeC1-grid">
                        <div className="mobileHomeHelpWanted-C1">
                            <p className="mobileHomeHelpWanted">Help Wanted</p>
                        </div>
                        <div className="mobileHomeApplyNow-C1">
                            <button className="mobileHomeApplyNow">Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileHomeC1;