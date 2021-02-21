import React from 'react';
import "../../styles/mobileStyles/mobileHomeC2.css";

class MobileHomeC2 extends React.Component {
    render() {
        return (
            <div className="mobileHomeC2-main">
                <div className="mobileHomeC2-gridC">
                    <div className="mobileHomeC2-grid">
                        <div className="mobileHomeHours-C2">
                            <div className="mobileHomeDays-C2">
                                <p className="mobileHomeDays">Sun - Mon</p>
                            </div>
                            <div className="mobileHomeHours-C2">
                                <p className="mobileHomeHours">Closed</p>
                            </div>
                        </div>
                        <div className="mobileHomeHours-C2">
                            <div className="mobileHomeDays-C2">
                                <p className="mobileHomeDays">Tues - Thurs</p>
                            </div>
                            <div className="mobileHomeHours-C2">
                                <p className="mobileHomeHours">11AM - 8PM</p>
                            </div>
                        </div>
                        <div className="mobileHomeHours-C2">
                            <div className="mobileHomeDays-C2">
                                <p className="mobileHomeDays">Fri - Sat</p>
                            </div>
                            <div className="mobileHomeHours-C2">
                                <p className="mobileHomeHours">11AM - 9PM</p>
                            </div>
                        </div>
                    </div>
                    <div className="mobileHomeC2-grid">
                        <div className="mobileHomeCarshow-C2">
                            <div className="mobileHomeCarshowTitle-C2">
                                <p>Car Show</p>
                            </div>
                            <div className="mobileHomeCarshowDays-C2">
                                <p>Tues - Fri</p>
                            </div>
                            <div className="mobileHomeCarshowHours-C2">
                                <p>4PM - 8PM</p>
                            </div>
                            <div className="mobileHomeCarshowSTitle-C2">
                                <p>Car Show Special</p>
                            </div>
                            <div className="mobileHomeCarshowData-C2">
                                <p>6" Loaded Meat</p>
                            </div>
                            <div className="mobileHomeCarshowPriceData-C2">
                                <p>$4.99</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileHomeC2;