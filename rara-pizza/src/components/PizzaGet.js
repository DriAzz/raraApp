import React from 'react';
import axios from 'axios';
import "../styles/pizzaGet.css";

class PizzaGet extends React.Component {
    state = {
        pizzaData: []
    };

    fetchPizzaData = () => {
        var encodedURI = window.encodeURI(this.props.uri);
        return axios.get(encodedURI).then(response => {
            this.setState(() => {
                return {
                    pizzaData: response.data
                };
            });
        });
    };

    componentDidMount() {
        this.fetchPizzaData();
    };

    render() {
        console.log(this.state.pizzaData);
        if (this.state.pizzaData.length === 0) {
            return <div className="loadingScreen-container">
                <i class="fas fa-hourglass"></i>
            </div>
        }

        const pizzas = this.state.pizzaData.map(pizza => (
            <div className="pizzaGet-box" key={pizza.PizzaID}>
                <div className="pizzaGetName-container">
                    <p className="pizzaGet-name">{pizza.PizzaName}</p>
                </div>
                <div className="pizzaGetIng-container">
                    <div className="pizzaGetIng-inner">
                        <div className="pizzaGetIng-sauces">
                            <div className="pizzaGetIng-title-container">
                                <p className="pizzaGetIng-title">Sauce</p>
                            </div>
                            <div className="pizzaGet-data-container">
                                <p className="pizzaGet-ing">{pizza.PizzaIngredientSauceType}</p>
                            </div>
                        </div>
                        <div className="pizzaGetIng-meats">
                            <div className="pizzaGetIng-title-container">
                                <p className="pizzaGetIng-title">Meats</p>
                            </div>
                            <div className="pizzaGet-data-container">
                                <p className="pizzaGet-ing">{pizza.PizzaIngredientPepperoni}</p>
                                <p className="pizzaGet-ing">{pizza.PizzaIngredientSausage}</p>
                                <p className="pizzaGet-ing">{pizza.PizzaIngredientSalami}</p>
                                <p className="pizzaGet-ing">{pizza.PizzaIngredientCanBacon}</p>
                                <p className="pizzaGet-ing">{pizza.PizzaIngredientBeefBurger}</p>
                                <p className="pizzaGet-ing">{pizza.PizzaIngredientBaconBits}</p>
                                <p className="pizzaGet-ing">{pizza.PizzaIngredientGrilledChicken}</p>
                            </div>
                        </div>
                        <div className="pizzaGetIng-veg">
                            <div className="pizzaGetIng-title-container">
                                <p className="pizzaGetIng-title">Vegetables</p>
                            </div>
                            <div className="pizzaGet-data-container">
                                <p className="pizzaGet-ing">{pizza.PizzaIngredientCheddarCheese}</p>
                                <p className="pizzaGet-ing">{pizza.PizzaIngredientShreddedLettuce}</p>
                                <p className="pizzaGet-ing">{pizza.PizzaIngredientPickles}</p>
                                <p className="pizzaGet-ing">{pizza.PizzaIngredientBananaPepper}</p>
                                <p className="pizzaGet-ing">{pizza.PizzaIngredientBlackOlive}</p>
                                <p className="pizzaGet-ing">{pizza.PizzaIngredientPineApple}</p>
                                <p className="pizzaGet-ing">{pizza.PizzaIngredientCucumber}</p>
                                <p className="pizzaGet-ing">{pizza.PizzaIngredientJalapeno}</p>
                                <p className="pizzaGet-ing">{pizza.PizzaIngredientMushroom}</p>
                                <p className="pizzaGet-ing">{pizza.PizzaIngredientMixedPepper}</p>
                                <p className="pizzaGet-ing">{pizza.PizzaIngredientTomato}</p>
                                <p className="pizzaGet-ing">{pizza.PizzaIngredientOnion}</p>
                                <p className="pizzaGet-ing">{pizza.PizzaIngredientSourKrout}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pizzaGetPrice-container">
                    <div className="pizzaGetLarge-container pizzaGrid-3">
                        <p className="pizzaGet-price">16" - ${pizza.PizzaLargePrice}</p>
                    </div>
                    <div className="pizzaGetMedium-container pizzaGrid-3">
                        <p className="pizzaGet-price">12" - ${pizza.PizzaMediumPrice}</p>
                    </div>
                    <div className="pizzaGetSmall-container pizzaGrid-3">
                        <p className="pizzaGet-price">6" - ${pizza.PizzaSmallPrice}</p>
                    </div>
                </div>
            </div>
        ));
        return <div>{pizzas}</div>
    };
}

export default PizzaGet;