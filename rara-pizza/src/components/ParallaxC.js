import React from 'react';
import "../styles/parallax.css";
import { Parallax, Background } from 'react-parallax';
import backImage from '../assets/woodBack.jpg';

import HelpWanted from './HelpWanted';


const ParallaxComponent = () => (
    <div className="parallaxContainer">
        {/* <div className="topBlock"></div> */}
        <div className="parallaxInnerContainer">
        </div>
        <div className="pizzaSpecHomeMainContainer">
            <div className="pizzaSpecContainerLeft">
                <div className="pizzaSpecContainer">
                    <div className="pizzaSpecWeekSpecC">
                        <p className="pizzaSpecText">Weekly Pizza Special</p>
                        <div className="pizzaInfoContainer">
                            <p className="pizzaInfo">16" One Topper</p>
                            <p className="breadInfo">Cheesy Bread Sticks</p>
                        </div>
                    </div>
                    <div className="hoursContainer">
                        <div className="hoursTextContainer">
                            <p className="hoursText">Hours</p>
                        </div>
                        <ul className="ulHoursText">
                            <li className="daysText">
                                <div className="dayContainer">
                                    <p className="weekDayText">Sunday:</p> <p className="closedText">CLOSED</p>
                                </div>
                            </li>
                            <li className="daysText">
                                <div className="dayContainer">
                                    <p className="weekDayText">Monday:</p> <p className="closedText">CLOSED</p>
                                </div>
                            </li>
                            <li className="daysText">
                                <div className="dayContainer">
                                    <p className="weekDayText">Tuesday:</p> <p className="openedText">11AM-8PM</p>
                                </div>
                            </li>
                            <li className="daysText">
                                <div className="dayContainer">
                                    <p className="weekDayText">Wednesday:</p> <p className="openedText">11AM-8PM</p>
                                </div>
                            </li>
                            <li className="daysText">
                                <div className="dayContainer">
                                    <p className="weekDayText">Thursday:</p> <p className="openedText">11AM-8PM</p>
                                </div>
                            </li>
                            <li className="daysText">
                                <div className="dayContainer">
                                    <p className="weekDayText">Friday:</p> <p className="openedText">11AM-9PM</p>
                                </div>
                            </li>
                            <li className="daysText">
                                <div className="dayContainer">
                                    <p className="weekDayText">Saturday:</p> <p className="openedText">11AM-9PM</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="csHourContainer">
                        <div className="csTitleContainer">
                            <p className="csTitle">Carshow</p>
                        </div>
                        <div className="csDateContainer">
                            <p className="csDate">Month # - Month #</p>
                        </div>
                        <div className="csHoursContainer">
                            <p className="csHours">5PM-8PM</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="helpWantedContainerRight">
                <div className="helpWantedContainer">
                    <HelpWanted />
                </div>
            </div>
            <div className="readme" style={{ height: 200 }}></div>
        </div>
    </div>
);

export default ParallaxComponent;