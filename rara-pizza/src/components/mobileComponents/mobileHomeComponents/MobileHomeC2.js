import React from 'react';
import "../../../styles/mobileStyles/mobileHomeC2.css";

class MobileHomeC2 extends React.Component {
    render() {
        return (
            <div className="mobileHomeC2-main">
                <div className="mobileHomeC2-gridC">
                    <div className="mobileHomeC2-grid">
                        <div className="mobileHomeC2-GridCInner">
                            <div className="mobileHomeTitleContainer-C2">
                                <div className="mobileHomeTitle-C2 mobileHomeDays-C2TITLE">
                                    <p className="mobileHomeTitle">Regular Hours</p>
                                </div>
                            </div>
                            <div className="mobileHomeHours-C2">
                                <div className="mobileHomeDays-C2 mobileHomeDays-C2REG">
                                    <p className="mobileHomeDays">Sun - Mon</p>
                                </div>
                                <div className="mobileHomeHoursC-C2">
                                    <p className="mobileHomeHoursCLSD">Closed</p>
                                </div>
                            </div>
                            <div className="mobileHomeHours-C2">
                                <div className="mobileHomeDays-C2 mobileHomeDays-C2REG">
                                    <p className="mobileHomeDays">Tues - Thurs</p>
                                </div>
                                <div className="mobileHomeHoursC-C2">
                                    <p className="mobileHomeHours">11AM - 8PM</p>
                                </div>
                            </div>
                            <div className="mobileHomeHours-C2">
                                <div className="mobileHomeDays-C2 mobileHomeDays-C2REG">
                                    <p className="mobileHomeDays">Fri - Sat</p>
                                </div>
                                <div className="mobileHomeHoursC-C2">
                                    <p className="mobileHomeHours">11AM - 9PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobileHomeC2-grid">
                        <div className="mobileHomeC2-GridCInner mobileHomeC2-GridInnerWidthChange">
                            <div className="mobileHomeHours-C2">
                                <div className="mobileHomeCSTitle-C2">
                                    <p className="mobileHomeTitle mobileTitleTypeCS">Car Show Hours</p>
                                </div>
                            </div>
                            <div className="mobileHomeHours-C2">
                                <div className="mobileHomeDays-C2">
                                    <p className="mobileHomeDays mobileHomeCarshowDays">Tues - Thurs</p>
                                </div>
                                <div className="mobileHomeHoursC-C2">
                                    <p className="mobileHomeHours">11AM - 8PM</p>
                                </div>
                            </div>
                            <div className="mobileHomeHours-C2">
                                <div className="mobileHomeDays-C2">
                                    <p className="mobileHomeDays mobileHomeCarshowDays">Fri</p>
                                </div>
                                <div className="mobileHomeHoursC-C2">
                                    <p className="mobileHomeHours">11AM - 9PM</p>
                                </div>
                            </div>
                            <div className="mobileHomeHours-C2 mobileHomeHelpWantedC">
                                <div className="mobileHomeHelpWanted-C2">
                                    <p className="mobileHomeHelpWanted">Help Wanted</p>
                                </div>
                                <div className="mobileHomeApplyNow-C2">
                                    <button className="mobileHomeApplyNow">Apply Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileHomeC2;