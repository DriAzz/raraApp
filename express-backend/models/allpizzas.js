/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    const allpizzas = sequelize.define('allpizzas', {
        PizzaID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        PizzaName: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        //Prices
        PizzaLargePrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        PizzaMediumPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        PizzaSmallPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        //Ingredients
        PizzaIngredientSauceType: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        PizzaIngredientCheddarCheese: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        PizzaIngredientShreddedLettuce: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        PizzaIngredientPizzaCheese: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        PizzaIngredientPepperoni: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        PizzaIngredientSausage: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        PizzaIngredientSalami: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        PizzaIngredientCanBacon: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        PizzaIngredientBeefBurger: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        PizzaIngredientBaconBits: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        PizzaIngredientPickles: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        PizzaIngredientBananaPepper: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        PizzaIngredientBlackOlive: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        PizzaIngredientPineApple: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        PizzaIngredientCucumber: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        PizzaIngredientJalapeno: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        PizzaIngredientMushroom: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        PizzaIngredientMixedPepper: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        PizzaIngredientTomato: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        PizzaIngredientOnion: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        PizzaIngredientGrilledChicken: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        PizzaIngredientSourKraut: {
            type: DataTypes.STRING(40),
            allowNull: true
        }
    }, {
        tableName: 'allpizzas'
    });
    return allpizzas;
};