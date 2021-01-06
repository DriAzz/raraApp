import React from 'react';
import axios from 'axios';
// import "../styles/sidesGet.css";

class SidesGet extends React.Component {
    state = {
        sidesData: []
    };

    fetchsidesData = () => {
        var encodedURI = window.encodeURI(this.props.uri);
        return axios.get(encodedURI).then(response => {
            this.setState(() => {
                return {
                    sidesData: response.data
                };
            });
        });
    };

    componentDidMount() {
        this.fetchsidesData();
    };

    render() {
        console.log(this.state.sidesData);
        if (this.state.sidesData.length === 0) {
            return <div className="loadingScreen-container">
                <i class="fas fa-hourglass"></i>
            </div>
        }

        const sides = this.state.sidesData.map(sides => (
            <div className="sidesGet-box" key={sides.SidesID}>
                <div className="sidesGetName-container">
                    <p className="sidesGet-name">{sides.SidesID}</p>
                </div>
                <div className="sidesGetIng-container">
                    <div className="sidesGet-container">
                        <p className="sidesGet-name">${sides.SidesName}</p>
                    </div>
                </div>
                <div className="sidesGetPrice-container">
                    <div className="sidesGet-container">
                        <p className="sidesGet-price">${sides.SidesPrice}</p>
                    </div>
                </div>
            </div>
        ));
        return <div>{sides}</div>
    }
}

export default SidesGet;