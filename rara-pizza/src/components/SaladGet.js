import React from 'react';
import axios from 'axios';
// import "../styles/saladGet.css";

class SaladGet extends React.Component {
    state = {
        saladData: []
    };

    fetchsaladData = () => {
        var encodedURI = window.encodeURI(this.props.uri);
        return axios.get(encodedURI).then(response => {
            this.setState(() => {
                return {
                    saladData: response.data
                };
            });
        });
    };

    componentDidMount() {
        this.fetchsaladData();
    };

    render() {
        console.log(this.state.saladData);
        if (this.state.saladData.length === 0) {
            return <div className="loadingScreen-container">
                <i class="fas fa=hourglass"></i>
            </div>
        }

        const salads = this.state.saladData.map(salad => (
            <div className="saladGet-box" key={salad.SaladID}>
                <div className="saladGetName-container">
                    <p className="saladGet-name">{salad.SaladID}</p>
                </div>
                <div className="saladGetIng-container">
                    <div className="saladGetIng-inner">
                        <div className="saladGetIng-meats">
                            <div className="saladGetIng-title">Meats</div>
                        </div>
                        <div className="saladGet-data-container">
                            <p className="saladGet-ing">{salad.SaladIngredientRoastBeef}</p>
                            <p className="saladGet-ing">{salad.SaladIngredientHam}</p>
                            <p className="saladGet-ing">{salad.SaladIngredientTurkey}</p>
                            <p className="saladGet-ing">{salad.SaladIngredientSalamiCanBacon}</p>
                            <p className="saladGet-ing">{salad.SaladIngredientSausage}</p>
                            <p className="saladGet-ing">{salad.SaladIngredientPepperoni}</p>
                            <p className="saladGet-ing">{salad.SaladIngredientBaconBit}</p>
                            <p className="saladGet-ing">{salad.SaladIngredientBurgerPatty}</p>
                            <p className="saladGet-ing">{salad.SaladIngredientChickenPatty}</p>
                            <p className="saladGet-ing">{salad.SaladIngredientCrispyChickenPatty}</p>
                        </div>
                    </div>
                    <div className="saladGetIng-veg">
                        <div className="saladGetIng-title-container">
                            <p className="saladGetIng-title">Vegetables</p>
                        </div>
                        <div className="saladGet-data-container">
                            <p className="saladGet-ing">{salad.SaladIngredientMushroom}</p>
                            <p className="saladGet-ing">{salad.SaladIngredientTomato}</p>
                            <p className="saladGet-ing">{salad.SaladIngredientOnion}</p>
                            <p className="saladGet-ing">{salad.SaladIngredientMixedPepper}</p>
                            <p className="saladGet-ing">{salad.SaladIngredientJalapeno}</p>
                            <p className="saladGet-ing">{salad.SaladIngredientBananaPepper}</p>
                            <p className="saladGet-ing">{salad.SaladIngredientPickle}</p>
                            <p className="saladGet-ing">{salad.SaladIngredientBlackOlive}</p>
                            <p className="saladGet-ing">{salad.SaladIngredientCucumber}</p>
                            <p className="saladGet-ing">{salad.SaladIngredientPineApple}</p>
                            <p className="saladGet-ing">{salad.SaladIngredientsaladLettuce}</p>
                        </div>
                    </div>
                </div>
                <div className="saladGetPrice-container">
                    <div className="saladGet-container">
                        <p className="saladGet-price">${salad.SaladPrice}</p>
                    </div>
                </div>
            </div>
        ));
        return <div>{salads}</div>
    }
}

export default SaladGet;