'use strict';
module.exports = (sequelize, DataTypes) => {
    const allsalads = sequelize.define('allsalads', {
        SaladID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        SaladName: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        SaladPrice: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        //Sauces
        SaladIngredientSauce1: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladIngredientSauce2: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        //Vegetables
        SaladIngredientTomato: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladIngredientOnion: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladIngredientMixedPepper: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladIngredientMushroom: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladIngredientJalapeno: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladIngredientBananaPepper: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladIngredientPickle: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladIngredientBlackOlive: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladIngredientCucumber: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladIngredientPineApple: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladIngredientSaladLettuce: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        //Meats
        SaladIngredientRoastBeef: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladIngredientHam: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladIngredientTurkey: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladIngredientSalami: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladIngredientPepperoni: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladIngredientBaconStrip: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladIngredientCanBacon: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladIngredientShreddedCheese: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladIngredientBurgerPatty: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladIngredientChickenPatty: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladIngredientCrispyChickenPatty: {
            type: DataTypes.STRING(40),
            allowNull: true
        }
    }, {});
    allsalads.associate = function (models) {
        // associations can be defined here
    };
    return allsalads;
};