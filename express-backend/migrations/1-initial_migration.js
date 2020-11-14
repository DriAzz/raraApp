'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "allpizza", deps: []
 * createTable "allsandwiches", deps: []
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2020-11-01T21:24:40.423Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "allpizza",
            {
                "PizzaID": {
                    "type": Sequelize.INTEGER(11),
                    "field": "PizzaID",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "PizzaName": {
                    "type": Sequelize.STRING(40),
                    "field": "PizzaName",
                    "allowNull": false
                },
                "PizzaLargePrice": {
                    "type": Sequelize.DECIMAL(10, 2),
                    "field": "PizzaLargePrice",
                    "allowNull": false
                },
                "PizzaMediumPrice": {
                    "type": Sequelize.DECIMAL(10, 2),
                    "field": "PizzaMediumPrice",
                    "allowNull": false
                },
                "PizzaSmallPrice": {
                    "type": Sequelize.DECIMAL(10, 2),
                    "field": "PizzaSmallPrice",
                    "allowNull": false
                },
                "PizzaIngredientSauceType": {
                    "type": Sequelize.STRING(40),
                    "field": "PizzaIngredientSauceType",
                    "allowNull": false
                },
                "PizzaIngredientCheddarCheese": {
                    "type": Sequelize.STRING(40),
                    "field": "PizzaIngredientCheddarCheese",
                    "allowNull": true
                },
                "PizzaIngredientShreddedLettuce": {
                    "type": Sequelize.STRING(40),
                    "field": "PizzaIngredientShreddedLettuce",
                    "allowNull": true
                },
                "PizzaIngredientPizzaCheese": {
                    "type": Sequelize.STRING(40),
                    "field": "PizzaIngredientPizzaCheese",
                    "allowNull": true
                },
                "PizzaIngredientPepperoni": {
                    "type": Sequelize.STRING(40),
                    "field": "PizzaIngredientPepperoni",
                    "allowNull": true
                },
                "PizzaIngredientSausage": {
                    "type": Sequelize.STRING(40),
                    "field": "PizzaIngredientSausage",
                    "allowNull": true
                },
                "PizzaIngredientSalami": {
                    "type": Sequelize.STRING(40),
                    "field": "PizzaIngredientSalami",
                    "allowNull": true
                },
                "PizzaIngredientCanBacon": {
                    "type": Sequelize.STRING(40),
                    "field": "PizzaIngredientCanBacon",
                    "allowNull": true
                },
                "PizzaIngredientBeefBurger": {
                    "type": Sequelize.STRING(40),
                    "field": "PizzaIngredientBeefBurger",
                    "allowNull": true
                },
                "PizzaIngredientBaconBits": {
                    "type": Sequelize.STRING(40),
                    "field": "PizzaIngredientBaconBits",
                    "allowNull": true
                },
                "PizzaIngredientPickles": {
                    "type": Sequelize.STRING(40),
                    "field": "PizzaIngredientPickles",
                    "allowNull": true
                },
                "PizzaIngredientBananaPepper": {
                    "type": Sequelize.STRING(40),
                    "field": "PizzaIngredientBananaPepper",
                    "allowNull": true
                },
                "PizzaIngredientBlackOlive": {
                    "type": Sequelize.STRING(40),
                    "field": "PizzaIngredientBlackOlive",
                    "allowNull": true
                },
                "PizzaIngredientPineApple": {
                    "type": Sequelize.STRING(40),
                    "field": "PizzaIngredientPineApple",
                    "allowNull": true
                },
                "PizzaIngredientCucumber": {
                    "type": Sequelize.STRING(40),
                    "field": "PizzaIngredientCucumber",
                    "allowNull": true
                },
                "PizzaIngredientJalapeno": {
                    "type": Sequelize.STRING(40),
                    "field": "PizzaIngredientJalapeno",
                    "allowNull": true
                },
                "PizzaIngredientMushroom": {
                    "type": Sequelize.STRING(40),
                    "field": "PizzaIngredientMushroom",
                    "allowNull": true
                },
                "PizzaIngredientMixedPepper": {
                    "type": Sequelize.STRING(40),
                    "field": "PizzaIngredientMixedPepper",
                    "allowNull": true
                },
                "PizzaIngredientTomato": {
                    "type": Sequelize.STRING(40),
                    "field": "PizzaIngredientTomato",
                    "allowNull": true
                },
                "PizzaIngredientOnion": {
                    "type": Sequelize.STRING(40),
                    "field": "PizzaIngredientOnion",
                    "allowNull": true
                },
                "PizzaIngredientGrilledChicken": {
                    "type": Sequelize.STRING(40),
                    "field": "PizzaIngredientGrilledChicken",
                    "allowNull": true
                },
                "PizzaIngredientSourKraut": {
                    "type": Sequelize.STRING(40),
                    "field": "PizzaIngredientSourKraut",
                    "allowNull": true
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "allsandwiches",
            {
                "SandwichID": {
                    "type": Sequelize.INTEGER(11),
                    "field": "SandwichID",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "SandwichName": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichName",
                    "allowNull": false
                },
                "SandwichPrice": {
                    "type": Sequelize.DECIMAL,
                    "field": "SandwichPrice",
                    "allowNull": false
                },
                "SandwichIngredientRedSauce": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientRedSauce",
                    "allowNull": true
                },
                "SandwichIngredientWhiteSauce": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientWhiteSauce",
                    "allowNull": true
                },
                "SandwichIngredientBBQSauce": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientBBQSauce",
                    "allowNull": true
                },
                "SandwichIngredientRanch": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientRanch",
                    "allowNull": true
                },
                "SandwichIngredientHoneyMustard": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientHoneyMustard",
                    "allowNull": true
                },
                "SandwichIngredientBeanSauce": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientBeanSauce",
                    "allowNull": true
                },
                "SandwichIngredientBuffSauce": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientBuffSauce",
                    "allowNull": true
                },
                "SandwichIngredientMayo": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientMayo",
                    "allowNull": true
                },
                "SandwichIngredientSpicyMustard": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientSpicyMustard",
                    "allowNull": true
                },
                "SandwichIngredientTomato": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientTomato",
                    "allowNull": true
                },
                "SandwichIngredientOnion": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientOnion",
                    "allowNull": true
                },
                "SandwichIngredientMixedPepper": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientMixedPepper",
                    "allowNull": true
                },
                "SandwichIngredientMushroom": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientMushroom",
                    "allowNull": true
                },
                "SandwichIngredientJalapeno": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientJalapeno",
                    "allowNull": true
                },
                "SandwichIngredientBananaPepper": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientBananaPepper",
                    "allowNull": true
                },
                "SandwichIngredientPickle": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientPickle",
                    "allowNull": true
                },
                "SandwichIngredientBlackOlive": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientBlackOlive",
                    "allowNull": true
                },
                "SandwichIngredientCucumber": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientCucumber",
                    "allowNull": true
                },
                "SandwichIngredientPineApple": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientPineApple",
                    "allowNull": true
                },
                "SandwichIngredientSandwichLettuce": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientSandwichLettuce",
                    "allowNull": true
                },
                "SandwichIngredientRoastBeef": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientRoastBeef",
                    "allowNull": true
                },
                "SandwichIngredientHam": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientHam",
                    "allowNull": true
                },
                "SandwichIngredientTurkey": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientTurkey",
                    "allowNull": true
                },
                "SandwichIngredientSalami": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientSalami",
                    "allowNull": true
                },
                "SandwichIngredientPepperoni": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientPepperoni",
                    "allowNull": true
                },
                "SandwichIngredientBaconStrip": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientBaconStrip",
                    "allowNull": true
                },
                "SandwichIngredientPepJack": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientPepJack",
                    "allowNull": true
                },
                "SandwichIngredientCheddar": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientCheddar",
                    "allowNull": true
                },
                "SandwichIngredientAmerican": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientAmerican",
                    "allowNull": true
                },
                "SandwichIngredientColbyJack": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientColbyJack",
                    "allowNull": true
                },
                "SandwichIngredientProvolone": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientProvolone",
                    "allowNull": true
                },
                "SandwichIngredientSwiss": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientSwiss",
                    "allowNull": true
                },
                "SandwichIngredientSmokedGuda": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientSmokedGuda",
                    "allowNull": true
                },
                "SandwichIngredientBurgerPatty": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientBurgerPatty",
                    "allowNull": true
                },
                "SandwichIngredientChickenPatty": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientChickenPatty",
                    "allowNull": true
                },
                "SandwichIngredientCrispyChickenPatty": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientCrispyChickenPatty",
                    "allowNull": true
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "users",
            {
                "UserId": {
                    "type": Sequelize.INTEGER,
                    "field": "UserId",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "FirstName": {
                    "type": Sequelize.STRING,
                    "field": "FirstName"
                },
                "LastName": {
                    "type": Sequelize.STRING,
                    "field": "LastName"
                },
                "Username": {
                    "type": Sequelize.STRING,
                    "field": "Username"
                },
                "Password": {
                    "type": Sequelize.STRING,
                    "field": "Password",
                    "unique": true
                },
                "Power": {
                    "type": Sequelize.BOOLEAN,
                    "field": "Power",
                    "defaultValue": false
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
