'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "allappetizers", deps: []
 * createTable "allpizza", deps: []
 * createTable "allsalads", deps: []
 * createTable "allsandwiches", deps: []
 * createTable "allsides", deps: []
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2020-12-26T19:35:06.171Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "allappetizers",
            {
                "AppetizerID": {
                    "type": Sequelize.INTEGER(11),
                    "field": "AppetizerID",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "AppetizerName": {
                    "type": Sequelize.STRING(40),
                    "field": "AppetizerName",
                    "allowNull": false
                },
                "AppetizerPrice": {
                    "type": Sequelize.DECIMAL,
                    "field": "AppetizerPrice",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
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
            "allsalads",
            {
                "SaladsID": {
                    "type": Sequelize.INTEGER(11),
                    "field": "SaladsID",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "SaladsName": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsName",
                    "allowNull": false
                },
                "SaladsPrice": {
                    "type": Sequelize.DECIMAL,
                    "field": "SaladsPrice",
                    "allowNull": false
                },
                "SaladsIngredientSauce1": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientSauce1",
                    "allowNull": true
                },
                "SaladsIngredientSauce2": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientSauce2",
                    "allowNull": true
                },
                "SaladsIngredientTomato": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientTomato",
                    "allowNull": true
                },
                "SaladsIngredientOnion": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientOnion",
                    "allowNull": true
                },
                "SaladsIngredientMixedPepper": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientMixedPepper",
                    "allowNull": true
                },
                "SaladsIngredientMushroom": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientMushroom",
                    "allowNull": true
                },
                "SaladsIngredientJalapeno": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientJalapeno",
                    "allowNull": true
                },
                "SaladsIngredientBananaPepper": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientBananaPepper",
                    "allowNull": true
                },
                "SaladsIngredientPickle": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientPickle",
                    "allowNull": true
                },
                "SaladsIngredientBlackOlive": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientBlackOlive",
                    "allowNull": true
                },
                "SaladsIngredientCucumber": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientCucumber",
                    "allowNull": true
                },
                "SaladsIngredientPineApple": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientPineApple",
                    "allowNull": true
                },
                "SaladsIngredientSaladsLettuce": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientSaladsLettuce",
                    "allowNull": true
                },
                "SaladsIngredientRoastBeef": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientRoastBeef",
                    "allowNull": true
                },
                "SaladsIngredientHam": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientHam",
                    "allowNull": true
                },
                "SaladsIngredientTurkey": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientTurkey",
                    "allowNull": true
                },
                "SaladsIngredientSalami": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientSalami",
                    "allowNull": true
                },
                "SaladsIngredientPepperoni": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientPepperoni",
                    "allowNull": true
                },
                "SaladsIngredientBaconStrip": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientBaconStrip",
                    "allowNull": true
                },
                "SaladsIngredientCanBacon": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientCanBacon",
                    "allowNull": true
                },
                "SaladsIngredientShreddedCheese": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientShreddedCheese",
                    "allowNull": true
                },
                "SaladsIngredientBurgerPatty": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientBurgerPatty",
                    "allowNull": true
                },
                "SaladsIngredientChickenPatty": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientChickenPatty",
                    "allowNull": true
                },
                "SaladsIngredientCrispyChickenPatty": {
                    "type": Sequelize.STRING(40),
                    "field": "SaladsIngredientCrispyChickenPatty",
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
                "SandwichIngredientSauceType1": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientSauceType1",
                    "allowNull": true
                },
                "SandwichIngredientSauceType2": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientSauceType2",
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
                "SandwichIngredientCanBacon": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientCanBacon",
                    "allowNull": true
                },
                "SandwichIngredientSausage": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientSausage",
                    "allowNull": true
                },
                "SandwichIngredientPepperoni": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientPepperoni",
                    "allowNull": true
                },
                "SandwichIngredientBaconBit": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientBaconBit",
                    "allowNull": true
                },
                "SandwichIngredientSecondaryCheese": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientSecondaryCheese",
                    "allowNull": true
                },
                "SandwichIngredientFirstCheese": {
                    "type": Sequelize.STRING(40),
                    "field": "SandwichIngredientFirstCheese",
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
            "allsides",
            {
                "SidesID": {
                    "type": Sequelize.INTEGER(11),
                    "field": "SidesID",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "SidesName": {
                    "type": Sequelize.STRING(40),
                    "field": "SidesName",
                    "allowNull": false
                },
                "SidesPrice": {
                    "type": Sequelize.DECIMAL,
                    "field": "SidesPrice",
                    "allowNull": false
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
