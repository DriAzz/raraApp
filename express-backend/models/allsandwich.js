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
    SandwichIngredientRedSauce: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientWhiteSauce: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientBBQSauce: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientRanch: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientHoneyMustard: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientBeanSauce: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientBuffSauce: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientMayo: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientSpicyMustard: {
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
    SandwichIngredientPepperoni: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientBaconStrip: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    //Cheese
    SandwichIngredientPepJack: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientCheddar: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientAmerican: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientColbyJack: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientProvolone: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientSwiss: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SandwichIngredientSmokedGuda: {
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