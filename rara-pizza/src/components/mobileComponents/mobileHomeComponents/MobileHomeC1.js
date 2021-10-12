import React from 'react';
import "../../../styles/mobileStyles/mobileHomeC1.css";

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
                    <div className="mobileHomeC1-grid mobileHomeC1CarShowHIDE">
                        <div className="mobileHomePizzaSpec-C1">
                            <div className="mobileHomeCarshow-C1">
                                <div className="mobileHomePizzaSpecName-C1 mobileHomeCarShowSpecName-C1">
                                    <p className="mobileHomePizzaSpecName mobileHomeCarShowSpecName">Car Show Special</p>
                                </div>
                                <div className="mobileHomePizzaSpecPizza-C1 mobileHomeCarShowSpecPizza-C1">
                                    <p className="mobileHomePizzaSpecPizza mobileHomeCarShowSpecPizza">6" One Topper Pizza</p>
                                </div>
                                <div className="mobileHomePizzaSpecPrice-C1 mobileHomeCarshowSpec-C1">
                                    <div className="mobileHomePizzaSpecPrice-C1InnerBack mobileHomeCarShowSpecPrice-C1InnerBack">
                                        <div className="mobileHomePizzaSpecPrice-C1Inner mobileHomeCarShowSpecPrice-C1Inner">
                                            <p className="mobileHomePizzaSpecPrice mobileHomeCarShowSpecPrice"><b>$4.48</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileHomeC1;