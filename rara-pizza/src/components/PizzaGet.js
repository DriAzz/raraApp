import React from 'react';
import axios from 'axios';
import "../styles/pizzaGet.css";

class PizzaGet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pizzaData: []
        }
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
            <div className="pizzaGet-box" key={pizza.pizzaID}>
                <div className="pizzaGetName-container">
                    <p className="pizzaGet-name">{pizza.PizzaName}</p>
                </div>
                <div className="pizzaGetIng-container">
                    <div className="pizzaGetSauce-container">
                        <div className="pizzaGetSTitle-container">
                            <p className="pizzaGetSTitle">Sauce</p>
                        </div>
                        <div className="pizzaGetSIng-container">
                            <p className="pizzaGetSIng">{pizza.PizzaIngredientSauceType}</p>
                        </div>
                    </div>
                    <div className="pizzaGetTop-container">
                        <div className="pizzaGetTopIng-container">
                            <div className="pizzaGetTopIng-Meats">
                                <p className="pizzaGetTopIng-MeatsTitle">Meats</p>
                                <div className="pizzaGetTopIng-MeatsIngredients">
                                    <p className="pizzaGetTopIng" id="pizzaGetTopIng1">{pizza.PizzaIngredientPepperoni}</p>
                                    <p className="pizzaGetTopIng" id="pizzaGetTopIng2">{pizza.PizzaIngredientSausage}</p>
                                    <p className="pizzaGetTopIng" id="pizzaGetTopIng3">{pizza.PizzaIngredientSalami}</p>
                                    <p className="pizzaGetTopIng" id="pizzaGetTopIng4">{pizza.PizzaIngredientCanBacon}</p>
                                    <p className="pizzaGetTopIng" id="pizzaGetTopIng5">{pizza.PizzaIngredientBeefBurger}</p>
                                    <p className="pizzaGetTopIng" id="pizzaGetTopIng6">{pizza.PizzaIngredientBaconBits}</p>
                                    <p className="pizzaGetTopIng" id="pizzaGetTopIng7">{pizza.PizzaIngredientGrilledChicken}</p>
                                </div>
                            </div>
                            <div className="pizzaGetTopIng-Veggies">
                            <p className="pizzaGetTopIng-VeggiesTitle">Veggies</p>
                                <div className="pizzaGetTopIng-VeggiesIngredients">
                                    <p className="pizzaGetTopIng" id="pizzaGetTopIng8">{pizza.PizzaIngredientPickles}</p>
                                    <p className="pizzaGetTopIng" id="pizzaGetTopIng9">{pizza.PizzaIngredientBananaPepper}</p>
                                    <p className="pizzaGetTopIng" id="pizzaGetTopIng10">{pizza.PizzaIngredientBlackOlive}</p>
                                    <p className="pizzaGetTopIng" id="pizzaGetTopIng11">{pizza.PizzaIngredientPineapple}</p>
                                    <p className="pizzaGetTopIng" id="pizzaGetTopIng13">{pizza.PizzaIngredientJalapeno}</p>
                                    <p className="pizzaGetTopIng" id="pizzaGetTopIng14">{pizza.PizzaIngredientMushroom}</p>
                                    <p className="pizzaGetTopIng" id="pizzaGetTopIng15">{pizza.PizzaIngredientMixedPepper}</p>
                                    <p className="pizzaGetTopIng" id="pizzaGetTopIng16">{pizza.PizzaIngredientTomato}</p>
                                    <p className="pizzaGetTopIng" id="pizzaGetTopIng17">{pizza.PizzaIngredientOnion}</p>
                                    <p className="pizzaGetTopIng" id="pizzaGetTopIng18">{pizza.PizzaIngredientSourKraut}</p>
                                    <p className="pizzaGetTopIng" id="pizzaGetTopIng19">{pizza.PizzaIngredientShreddedLettuce}</p>
                                    <p className="pizzaGetTopIng" id="pizzaGetTopIng20">{pizza.PizzaIngredientCheddarCheese}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pizzaGetPrice-container">
                        <div className="pizzaGetPriceLarge-container pizzaGetPriceA-containerGlobal">
                            <p className="pizzaGetPriceLarge">16": ${pizza.PizzaLargePrice}</p>
                        </div>
                        <div className="pizzaGetPriceMedium-container pizzaGetPriceA-containerGlobal">
                            <p className="pizzaGetPriceMedium">12": ${pizza.PizzaMediumPrice}</p>
                        </div>
                        <div className="pizzaGetPriceSmall-container pizzaGetPriceA-containerGlobal">
                            <p className="pizzaGetPriceSmall">6": ${pizza.PizzaSmallPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
            // <div className="pizzaGet-box" key={pizza.PizzaID}>
            //     <div className="pizzaGet-boxBordered" >
            //         <div className="pizzaGet-boxMargin">
            //             <div className="pizzaGetName-container">
            //                 <p className="pizzaGet-name">{pizza.PizzaName}</p>
            //             </div>
            //             <div className="pizzaGetIng-container">
            //                 <div className="pizzaGetIng-inner">
            //                     <div className="pizzaGetIng-sauces">
            //                         <div className="pizzaGetIng-title-container">
            //                             <p className="pizzaGetIng-title pizzaGetIng-titleSauceC">Sauce</p>
            //                         </div>
            //                         <div className="pizzaGet-data-container">
            //                             <div className="pizzaGet-dataInnerContainer">
            //                                 <p className="pizzaGet-ing">{pizza.PizzaIngredientSauceType}</p>
            //                             </div>
            //                         </div>
            //                     </div>
            //                     <div className="pizzaGetIng-meats">
            //                         <div className="pizzaGetIng-title-container pizzaGetIng-titleMeatsC">
            //                             <p className="pizzaGetIng-title">Meats</p>
            //                         </div>
            //                         <div className="pizzaGet-data-container">
            //                             <div className="pizzaGet-dataInnerContainer">
            //                                 <div className="pizzaGet-dataGrid">
            //                                     <p className="pizzaGet-ing">{pizza.PizzaIngredientPepperoni}</p>
            //                                 </div>
            //                                 <div className="pizzaGet-dataGrid">
            //                                     <p className="pizzaGet-ing">{pizza.PizzaIngredientSausage}</p>
            //                                 </div>
            //                                 <div className="pizzaGet-dataGrid">
            //                                     <p className="pizzaGet-ing">{pizza.PizzaIngredientSalami}</p>
            //                                 </div>
            //                                 <div className="pizzaGet-dataGrid">
            //                                     <p className="pizzaGet-ing">{pizza.PizzaIngredientCanBacon}</p>
            //                                 </div>
            //                                 <div className="pizzaGet-dataGrid">
            //                                     <p className="pizzaGet-ing">{pizza.PizzaIngredientBeefBurger}</p>
            //                                 </div>
            //                                 <div className="pizzaGet-dataGrid">
            //                                     <p className="pizzaGet-ing">{pizza.PizzaIngredientBaconBits}</p>
            //                                 </div>
            //                                 <div className="pizzaGet-dataGrid">
            //                                     <p className="pizzaGet-ing">{pizza.PizzaIngredientGrilledChicken}</p>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                     </div>
            //                     <div className="pizzaGetIng-veg">
            //                         <div className="pizzaGetIng-title-container">
            //                             <p className="pizzaGetIng-title">Vegetables</p>
            //                         </div>
            //                         <div className="pizzaGet-dataInnerContainer">

            //                             {/* Remove "pizzaGet-dataGrid" except one of them */}

            //                             <div className="pizzaGet-dataGrid">
            //                                 <p className="pizzaGet-ing">{pizza.PizzaIngredientCheddarCheese}</p>
            //                                 <p className="pizzaGet-ing">{pizza.PizzaIngredientShreddedLettuce}</p>
            //                                 <p className="pizzaGet-ing">{pizza.PizzaIngredientPickles}</p>
            //                             </div>
            //                             <div className="pizzaGet-dataGrid">
            //                                 <p className="pizzaGet-ing">{pizza.PizzaIngredientBananaPepper}</p>
            //                                 <p className="pizzaGet-ing">{pizza.PizzaIngredientBlackOlive}</p>
            //                                 <p className="pizzaGet-ing">{pizza.PizzaIngredientPineApple}</p>
            //                             </div>
            //                             <div className="pizzaGet-dataGrid">
            //                                 <p className="pizzaGet-ing">{pizza.PizzaIngredientCucumber}</p>
            //                                 <p className="pizzaGet-ing">{pizza.PizzaIngredientJalapeno}</p>
            //                                 <p className="pizzaGet-ing">{pizza.PizzaIngredientMushroom}</p>
            //                             </div>
            //                             <div className="pizzaGet-dataGrid">
            //                                 <p className="pizzaGet-ing">{pizza.PizzaIngredientMixedPepper}</p>
            //                                 <p className="pizzaGet-ing">{pizza.PizzaIngredientTomato}</p>
            //                                 <p className="pizzaGet-ing">{pizza.PizzaIngredientOnion}</p>
            //                             </div>
            //                             <div className="pizzaGet-dataGrid">
            //                                 <p className="pizzaGet-ing">{pizza.PizzaIngredientSourKrout}</p>
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="pizzaGetPrice-container">
            //             <div className="pizzaGetIng-title-container pizzaGetPrice-titleC">
            //                 <p className="pizzaGetIng-title pizzaGetPrice-title">Price</p>
            //             </div>
            //             <div className="pizzaGetLarge-container pizzaGrid-3">
            //                 <p className="pizzaGet-price"><b>16"</b> - <i>${pizza.PizzaLargePrice}</i></p>
            //             </div>
            //             <div className="pizzaGetMedium-container pizzaGrid-3">
            //                 <p className="pizzaGet-price"><b>12"</b> - <i>${pizza.PizzaMediumPrice}</i></p>
            //             </div>
            //             <div className="pizzaGetSmall-container pizzaGrid-3">
            //                 <p className="pizzaGet-price"><b>6"</b> - <i>${pizza.PizzaSmallPrice}</i></p>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        ));
        return <div>{pizzas}</div>
    };
}

export default PizzaGet;