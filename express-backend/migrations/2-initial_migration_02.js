'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "SaladsName" from table "allsalads"
 * removeColumn "SaladsIngredientCrispyChickenPatty" from table "allsalads"
 * removeColumn "SaladsIngredientChickenPatty" from table "allsalads"
 * removeColumn "SaladsIngredientBurgerPatty" from table "allsalads"
 * removeColumn "SaladsIngredientShreddedCheese" from table "allsalads"
 * removeColumn "SaladsIngredientCanBacon" from table "allsalads"
 * removeColumn "SaladsIngredientBaconStrip" from table "allsalads"
 * removeColumn "SaladsIngredientPepperoni" from table "allsalads"
 * removeColumn "SaladsIngredientSalami" from table "allsalads"
 * removeColumn "SaladsIngredientTurkey" from table "allsalads"
 * removeColumn "SaladsIngredientHam" from table "allsalads"
 * removeColumn "SaladsIngredientRoastBeef" from table "allsalads"
 * removeColumn "SaladsIngredientSaladsLettuce" from table "allsalads"
 * removeColumn "SaladsPrice" from table "allsalads"
 * removeColumn "SaladsIngredientCucumber" from table "allsalads"
 * removeColumn "SaladsIngredientBlackOlive" from table "allsalads"
 * removeColumn "SaladsIngredientPickle" from table "allsalads"
 * removeColumn "SaladsIngredientBananaPepper" from table "allsalads"
 * removeColumn "SaladsIngredientJalapeno" from table "allsalads"
 * removeColumn "SaladsIngredientMushroom" from table "allsalads"
 * removeColumn "SaladsIngredientMixedPepper" from table "allsalads"
 * removeColumn "SaladsIngredientOnion" from table "allsalads"
 * removeColumn "SaladsIngredientTomato" from table "allsalads"
 * removeColumn "SaladsIngredientSauce2" from table "allsalads"
 * removeColumn "SaladsIngredientSauce1" from table "allsalads"
 * removeColumn "SaladsID" from table "allsalads"
 * removeColumn "SaladsIngredientPineApple" from table "allsalads"
 * addColumn "SaladID" to table "allsalads"
 * addColumn "SaladIngredientChickenPatty" to table "allsalads"
 * addColumn "SaladIngredientBurgerPatty" to table "allsalads"
 * addColumn "SaladIngredientShreddedCheese" to table "allsalads"
 * addColumn "SaladIngredientCanBacon" to table "allsalads"
 * addColumn "SaladIngredientBaconStrip" to table "allsalads"
 * addColumn "SaladIngredientPepperoni" to table "allsalads"
 * addColumn "SaladIngredientSalami" to table "allsalads"
 * addColumn "SaladIngredientTurkey" to table "allsalads"
 * addColumn "SaladIngredientHam" to table "allsalads"
 * addColumn "SaladIngredientRoastBeef" to table "allsalads"
 * addColumn "SaladIngredientSaladLettuce" to table "allsalads"
 * addColumn "SaladIngredientPineApple" to table "allsalads"
 * addColumn "SaladIngredientCucumber" to table "allsalads"
 * addColumn "SaladIngredientBlackOlive" to table "allsalads"
 * addColumn "SaladIngredientPickle" to table "allsalads"
 * addColumn "SaladIngredientBananaPepper" to table "allsalads"
 * addColumn "SaladIngredientJalapeno" to table "allsalads"
 * addColumn "SaladIngredientMushroom" to table "allsalads"
 * addColumn "SaladIngredientMixedPepper" to table "allsalads"
 * addColumn "SaladIngredientOnion" to table "allsalads"
 * addColumn "SaladIngredientTomato" to table "allsalads"
 * addColumn "SaladIngredientSauce2" to table "allsalads"
 * addColumn "SaladIngredientSauce1" to table "allsalads"
 * addColumn "SaladPrice" to table "allsalads"
 * addColumn "SaladName" to table "allsalads"
 * addColumn "SaladIngredientCrispyChickenPatty" to table "allsalads"
 *
 **/

var info = {
    "revision": 2,
    "name": "initial_migration_02",
    "created": "2021-01-03T00:56:49.077Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["allsalads", "SaladsName"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientCrispyChickenPatty"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientChickenPatty"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientBurgerPatty"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientShreddedCheese"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientCanBacon"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientBaconStrip"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientPepperoni"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientSalami"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientTurkey"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientHam"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientRoastBeef"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientSaladsLettuce"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsPrice"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientCucumber"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientBlackOlive"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientPickle"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientBananaPepper"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientJalapeno"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientMushroom"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientMixedPepper"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientOnion"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientTomato"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientSauce2"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientSauce1"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsID"]
    },
    {
        fn: "removeColumn",
        params: ["allsalads", "SaladsIngredientPineApple"]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladID",
            {
                "type": Sequelize.INTEGER(11),
                "field": "SaladID",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientChickenPatty",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientChickenPatty",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientBurgerPatty",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientBurgerPatty",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientShreddedCheese",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientShreddedCheese",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientCanBacon",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientCanBacon",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientBaconStrip",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientBaconStrip",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientPepperoni",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientPepperoni",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientSalami",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientSalami",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientTurkey",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientTurkey",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientHam",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientHam",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientRoastBeef",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientRoastBeef",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientSaladLettuce",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientSaladLettuce",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientPineApple",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientPineApple",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientCucumber",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientCucumber",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientBlackOlive",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientBlackOlive",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientPickle",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientPickle",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientBananaPepper",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientBananaPepper",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientJalapeno",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientJalapeno",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientMushroom",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientMushroom",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientMixedPepper",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientMixedPepper",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientOnion",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientOnion",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientTomato",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientTomato",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientSauce2",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientSauce2",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientSauce1",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientSauce1",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladPrice",
            {
                "type": Sequelize.DECIMAL,
                "field": "SaladPrice",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladName",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladName",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "allsalads",
            "SaladIngredientCrispyChickenPatty",
            {
                "type": Sequelize.STRING(40),
                "field": "SaladIngredientCrispyChickenPatty",
                "allowNull": true
            }
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
