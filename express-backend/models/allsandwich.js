'use strict';
module.exports = (sequelize, DataTypes) => {
  const allsandwich = sequelize.define('allsandwich', {
    SandwichID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SandwichName: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    SandwichPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    //Sauces
    SandwichIngredientSauceType1: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientSauceType2: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    //Vegetables
    SandwichIngredientTomato: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientOnion: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientMixedPepper: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientMushroom: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientJalapeno: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientBananaPepper: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientPickle: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientBlackOlive: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientCucumber: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientPineApple: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientSandwichLettuce: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    //Meats
    SandwichIngredientRoastBeef: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientHam: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientTurkey: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientSalami: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientCanBacon: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientSausage: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientPepperoni: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientBaconBit: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    //Cheese
    SandwichIngredientFirstCheese: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientSecondaryCheese: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientBurgerPatty: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientChickenPatty: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientCrispyChickenPatty: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {});
  allsandwich.associate = function (models) {
    // associations can be defined here
  };
  return allsandwich;
};