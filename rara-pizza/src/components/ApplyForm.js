import React from 'react';
import "../styles/apply.css";

const ApplyForm = () => (
    <div className="applyForm-container">
        <form className="applyForm">
            <div className="titleForm-container">
                <p className="titleForm">Employment Application</p>
            </div>
            <div className="nameInfo-container">
                <div className="firstName-container">
                    <label for="fname" className="labels label-fname">First Name</label>
                    <input type="text" className="apply-input input-firstname" placeholder="First Name" />
                </div>
                <div calssName="middleName-container">
                    <input type="text" className="apply-input input-middlename" placeholder="Middle Name" />
                </div>
                    <input type="text" className="apply-input input-lastname" placeholder="Last Name" />
            </div>
            <div className="locationInfo-container">
                <div calssName="">
                    
                </div>
                <input type="text" className="address-input" placeholder="Address" />
                <input type="text" className="city-input" placeholder="City" />
                <select>
                    <option value="alabama">Alabama</option>
                    <option value="alaska">Alaska</option>
                    <option value="arizona">Arizona</option>
                    <option value="arkansas">Arkansas</option>
                    <option value="california">California</option>
                    <option value="colorado">Colorado</option>
                    <option value="connecticut">Connecticut</option>
                    <option value="delaware">Delaware</option>
                    <option value="florida">Florida</option>
                    <option value="georgia">Georgia</option>
                    <option value="hawaii">Hawaii</option>
                    <option value="idaho">Idaho</option>
                    <option value="illonis">Illonis</option>
                    <option value="indiana">Indiana</option>
                    <option value="iowa">Iowa</option>
                    <option value="kansas">Kansas</option>
                    <option value="kentucky">Kentucky</option>
                    <option value="louisiana">Louisiana</option>
                    <option value="main">Maine</option>
                    <option value="maryland">Maryland</option>
                    <option value="massachusetts">Massachusetts</option>
                    <option value="michigan">Michigan</option>
                    <option value="minnesota">Minnesota</option>
                    <option value="mississippi">Mississippi</option>
                    <option value="missouri">Missouri</option>
                    <option value="montana">Montana</option>
                    <option value="nebraska">Nebraska</option>
                    <option value="nevada">Nevada</option>
                    <option value="new hampshire">New Hampshire</option>
                    <option value="new jersey">New Jersey</option>
                    <option value="new mexico">New Mexico</option>
                    <option value="new york">New York</option>
                    <option value="north carolina">North Carolina</option>
                    <option value="north dakota">North Dakota</option>
                    <option value="ohio">Ohio</option>
                    <option value="oklahoma">Oklahoma</option>
                    <option value="oregon">Oregon</option>
                    <option value="pennsylvania">Pennsylvania</option>
                    <option value="rhode island">Rhode Island</option>
                    <option value="south carolina">South Carolina</option>
                    <option value="south dakota">South Dakota</option>
                    <option value="tennessee">Tennessee</option>
                    <option value="texas">Texas</option>
                    <option value="utah">Utah</option>
                    <option value="vermont">Vermont</option>
                    <option value="virginia">Virginia</option>
                    <option value="washington">Washington</option>
                    <option value="west virginia">West Virginia</option>
                    <option value="wisconsin">Wisconsin</option>
                    <option value="wyoming">Wyoming</option>
                </select>
                <input type="text" className="zip-input" placeholder="Zip" />
            </div>
            <div className="contactInfo-container">
                <input type="tel" className="phone-input" placeholder="###-###-####" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                <input type="email" placeholder="example@domain.com" />
            </div>
            <div className="dataAvailable-container">
                <input type="date" />
            </div>
            <div className="socialSecurity-container">
                <input type="text" placeholder="###-##-####" />
            </div>
        </form>
    </div>
);

export default ApplyForm;