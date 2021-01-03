import React from 'react';
import axios from 'axios';
// import "../styles/appetizersGet.css";

class AppetizersGet extends React.Component {
    state = {
        appetizerData: []
    };

    fetchappetizerData = () => {
        var encodedURI = window.encodeURI(this.props.uri);
        return axios.get(encodedURI).then(response => {
            this.setState(() => {
                return {
                    appetizerData: response.data
                };
            });
        });
    };

    componentDidMount() {
        this.fetchappetizerData();
    };

    render() {
        console.log(this.state.appetizerData);
        if (this.state.appetizerData.length === 0) {
            return <div className="loadingScreen-container">
                <i class="fas fa=hourglass"></i>
            </div>
        }

        const appetizers = this.state.appetizerData.map(appetizers => (
            <div className="appetizersGet-box" key={appetizers.AppetizerID}>
                <div className="appetizersGetName-container">
                    <p className="appetizersGet-name">{appetizers.AppetizerID}</p>
                </div>
                <div className="appetizersGetIng-container">
                    <div className="appetizersGet-container">
                        <p className="appetizerGet-name">${appetizers.AppetizerName}</p>
                    </div>
                </div>
                <div className="appetizersGetPrice-container">
                    <div className="appetizersGet-container">
                        <p className="appetizersGet-price">${appetizers.AppetizerPrice}</p>
                    </div>
                </div>
            </div>
        ));
        return <div>{appetizers}</div>
    }
}

export default AppetizersGet;