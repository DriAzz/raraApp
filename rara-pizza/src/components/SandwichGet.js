import React from 'react';
import axios from 'axios';
import "../styles/sandwichGet.css";

class SandwichGet extends React.Component {
    state = {
        sandwichData: []
    };

    fetchSandwichData = () => {
        var encodedURI = window.encodeURI(this.props.uri);
        return axios.get(encodedURI).then(response => {
            this.setState(() => {
                return {
                    sandwichData: response.data
                };
            });
        });
    };

    componentDidMount() {
        this.fetchSandwichData();
    };

    render() {
        console.log(this.state.sandwichData);
        if (this.state.sandwichData.length === 0) {
            return <div className="loadingScreen-container">
                <i class="fas fa=hourglass"></i>
            </div>
        }

        const sandwiches = this.state.sandwichData.map(sandwich => (
            <div className="sandwichGet-box" key={sandwich.SandwichID}>
                <div className="sandwichGetName-container">
                    <p className="sandwichGet-name">{sandwich.SandwichID}</p>
                </div>
                <div className="sandwichGetIng-container">
                    <div className="sandwichGetIng-inner">
                        <div className="sandwichGetIng-title-container">
                            <p className="sandwichGet-title">Sauce</p>
                        </div>
                        <div className="sandwich-data-container">
                            <div className="sandwich-data-left">
                                <p className="sandwichGet-ing">{sandwich.SandwichIngredientSauceType1}</p>
                            </div>
                            <div className="sandwich-data-right">
                                <p className="sandwichGet-ing">{sandwich.SandwichIngredientSauceType2}</p>
                            </div>
                        </div>
                        <div className="sandwich-data-container">
                            <div className="sandwich-data-left">
                                <p className="sandwichGet-ing">{sandwich.SandwichIngredientFirstCheese}</p>
                            </div>
                            <div className="sandwich-data-right">
                                <p className="sandwichGet-ing">{sandwich.SandwichIngredientSecondaryCheese}</p>
                            </div>
                        </div>
                        <div className="sandwichGetIng-meats">
                            <div className="sandwichGetIng-title">Meats</div>
                        </div>
                        <div className="sandwichGet-data-container">
                            <p className="sandwichGet-ing">{sandwich.SandwichIngredientRoastBeef}</p>
                            <p className="sandwichGet-ing">{sandwich.SandwichIngredientHam}</p>
                            <p className="sandwichGet-ing">{sandwich.SandwichIngredientTurkey}</p>
                            <p className="sandwichGet-ing">{sandwich.SandwichIngredientSalamiCanBacon}</p>
                            <p className="sandwichGet-ing">{sandwich.SandwichIngredientSausage}</p>
                            <p className="sandwichGet-ing">{sandwich.SandwichIngredientPepperoni}</p>
                            <p className="sandwichGet-ing">{sandwich.SandwichIngredientBaconBit}</p>
                            <p className="sandwichGet-ing">{sandwich.SandwichIngredientBurgerPatty}</p>
                            <p className="sandwichGet-ing">{sandwich.SandwichIngredientChickenPatty}</p>
                            <p className="sandwichGet-ing">{sandwich.SandwichIngredientCrispyChickenPatty}</p>
                        </div>
                    </div>
                    <div className="sandwichGetIng-veg">
                        <div className="sandwichGetIng-title-container">
                            <p className="sandwichGetIng-title">Vegetables</p>
                        </div>
                        <div className="sandwichGet-data-container">
                            <p className="sandwichGet-ing">{sandwich.SandwichIngredientMushroom}</p>
                            <p className="sandwichGet-ing">{sandwich.SandwichIngredientTomato}</p>
                            <p className="sandwichGet-ing">{sandwich.SandwichIngredientOnion}</p>
                            <p className="sandwichGet-ing">{sandwich.SandwichIngredientMixedPepper}</p>
                            <p className="sandwichGet-ing">{sandwich.SandwichIngredientJalapeno}</p>
                            <p className="sandwichGet-ing">{sandwich.SandwichIngredientBananaPepper}</p>
                            <p className="sandwichGet-ing">{sandwich.SandwichIngredientPickle}</p>
                            <p className="sandwichGet-ing">{sandwich.SandwichIngredientBlackOlive}</p>
                            <p className="sandwichGet-ing">{sandwich.SandwichIngredientCucumber}</p>
                            <p className="sandwichGet-ing">{sandwich.SandwichIngredientPineApple}</p>
                            <p className="sandwichGet-ing">{sandwich.SandwichIngredientSandwichLettuce}</p>
                        </div>
                    </div>
                </div>
                <div className="sandwichGetPrice-container">
                    <div className="sandwichGet-container">
                        <p className="sandwichGet-price">${sandwich.SandwichPrice}</p>
                    </div>
                </div>
            </div>
        ));
        return <div>{sandwiches}</div>
    }
}

export default SandwichGet;