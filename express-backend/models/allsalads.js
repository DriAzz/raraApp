'use strict';
module.exports = (sequelize, DataTypes) => {
    const allsalads = sequelize.define('allsalads', {
        SaladsID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        SaladsName: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        SaladsPrice: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        //Sauces
        SaladsIngredientSauce1: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladsIngredientSauce2: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        //Vegetables
        SaladsIngredientTomato: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladsIngredientOnion: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladsIngredientMixedPepper: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladsIngredientMushroom: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladsIngredientJalapeno: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladsIngredientBananaPepper: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladsIngredientPickle: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladsIngredientBlackOlive: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladsIngredientCucumber: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladsIngredientPineApple: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladsIngredientSaladsLettuce: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        //Meats
        SaladsIngredientRoastBeef: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladsIngredientHam: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladsIngredientTurkey: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladsIngredientSalami: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladsIngredientPepperoni: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladsIngredientBaconStrip: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladsIngredientCanBacon: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladsIngredientShreddedCheese: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladsIngredientBurgerPatty: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladsIngredientChickenPatty: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        SaladsIngredientCrispyChickenPatty: {
            type: DataTypes.STRING(40),
            allowNull: true
        }
    }, {});
    allsalads.associate = function (models) {
        // associations can be defined here
    };
    return allsalads;
};