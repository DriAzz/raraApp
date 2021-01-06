import React from 'react';
import "../styles/helpwanted.css";

const HelpWanted = () => (
    <div className="helpWanted-container">
        <div className="helpWanted-boxC">
            <a href="/apply" className="helpWanted-text">Help Wanted</a>
        </div>
        <div className="helpWanted-infoC">
            <div className="helpWantedGridP1">
                <p className="helpWanted-p1">We need <b>Servers</b></p>
            </div>
            <div className="helpWantedGridP1">
                <p className="helpWanted-p1">We need <b>Cooks</b></p>
            </div>
        </div>
        <div className="helpWanted-buttonC">
            <button type="button" className="apply-now-button">
                <a href="/apply" className="apply-link">Apply Now</a>
            </button>
        </div>
    </div>
);

export default HelpWanted;