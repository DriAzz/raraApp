var express = require('express');
var router = express.Router();
var models = require('../models');
var authService = require('../services/auth');
var Sequelize = require('sequelize');
var Op = Sequelize.Op;


/* Pizza Routes */
router.get('/edit/pizzas', function (req, res, next) {
    let token = req.cookies.jwt;
    authService.verifyUser(token)
        .then(user => {
            if (user.Power == true) {
                models.allpizza.findAll({}).then(pizzaFound => {
                    res.render('adminEditPizza', {
                        // FirstName: user.FirstName,
                        // Power: user.Power,
                        // powerMessage: 'Admin',
                        pizzas: pizzaFound
                    })
                });
            } else if (user.Power == false) {
                res.status(401);
                res.send('You do not have access to this');
            } else {
                res.status(401);
                res.send('Must be logged in');
            }
        });
});

router.post('/edit/pizzas', function (req, res, next) {
    let token = req.cookies.jwt;
    authService.verifyUser(token).then(user => {
        if (user.Power == true) {
            models.allpizza.findOrCreate({
                where: {
                    PizzaName: req.body.pizzaname
                },
                defaults: {
                    PizzaLargePrice: req.body.pizzalargeprice,
                    PizzaMediumPrice: req.body.pizzamediumprice,
                    PizzaSmallPrice: req.body.pizzasmallprice,
                    PizzaIngredientRedSauce: req.body.ingRedSauce,
                    PizzaIngredientWhiteSauce: req.body.ingWhiteSauce,
                    PizzaIngredientBBQSauce: req.body.ingBBQSauce,
                    PizzaIngredientRanchSauce: req.body.ingRanchSauce,
                    PizzaIngredientBuffaloSauce: req.body.ingBuffSauce,
                    PizzaIngredientBeanSauce: req.body.ingBeanSauce,
                    PizzaIngredientPepperoni: req.body.ingPepperoni,
                    PizzaIngredientSausage: req.body.ingSausage,
                    PizzaIngredientCanBacon: req.body.ingCanBacon,
                    PizzaIngredientSalami: req.body.ingSalami,
                    PizzaIngredientBaconBits: req.body.ingBaconBit,
                    PizzaIngredientBeefBurger: req.body.ingBeef,
                    PizzaIngredientGrilledChicken: req.body.ingGChicken,
                    PizzaIngredientSmokedSausage: req.body.ingSmokeSausage,
                    PizzaIngredientMushroom: req.body.ingMushroom,
                    PizzaIngredientMixedPepper: req.body.ingMixedPepper,
                    PizzaIngredientTomato: req.body.ingTomato,
                    PizzaIngredientOnion: req.body.ingOnion,
                    PizzaIngredientPineApple: req.body.ingPineApple,
                    PizzaIngredientBananaPepper: req.body.ingBananaPepper,
                    PizzaIngredientPickle: req.body.ingPickle,
                    PizzaIngredientJalapeno: req.body.ingJalapeno,
                    PizzaIngredientBlackOlive: req.body.ingBlackOlive
                }
            }).spread(function (result, created) {
                if (created) {
                    res.redirect('/menu/edit/pizzas');
                    console.log(result);
                } else {
                    res.send('Was not created');
                }
            });
        }
    });
});

// Query for all pizza's
router.get('/allpizzas', function (req, res, next) {
    models.allpizza.findAll({
        where: {
            PizzaID: {
                [Op.gt]: 0
            }
        }
    }).then(allpizzaFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(allpizzaFound));
        console.log(allpizzaFound);
    });
});



/* Sandwich Routes */
router.get('/edit/sandwiches', function (req, res, next) {
    let token = req.cookies.jwt;
    authService.verifyUser(token)
        .then(user => {
            if (user.Power == true) {
                models.allsandwich.findAll({}).then(sandwichFound => {
                    res.render('adminEditSand', {
                        sandwiches: sandwichFound
                    })
                });
            } else if (user.Power == false) {
                res.status(401);
                res.send('You do not have access to this');
            } else {
                res.status(401);
                res.send('Must be logged in');
            }
        });
});

router.post('/edit/sandwiches', function (req, res, next) {
    let token = req.cookies.jwt;
    authService.verifyUser(token).then(user => {
        if (user.Power == true) {
            models.allsandwich.findOrCreate({
                where: {
                    SandwichName: req.body.sandwichname
                },
                defaults: {
                    SandwichPrice: req.body.sandwichprice,
                    SandwichIngredientRedSauce: req.body.ingRedSauce,
                    SandwichIngredientWhiteSauce: req.body.ingWhiteSauce,
                    SandwichIngredientBBQSauce: req.body.ingBBQSauce,
                    SandwichIngredientRanch: req.body.ingRanchSauce,
                    SandwichIngredientHoneyMustard: req.body.ingHoneyMustard,
                    SandwichIngredientBeanSauce: req.body.ingBeanSauce,
                    SandwichIngredientBuffSauce: req.body.ingBuffSauce,
                    SandwichIngredientMayo: req.body.ingMayoSauce,
                    SandwichIngredientSpicyMustard: req.body.ingSpicyMustard,
                    SandwichIngredientTomato: req.body.ingTomato,
                    SandwichIngredientOnion: req.body.ingOnion,
                    SandwichIngredientMixedPepper: req.body.ingMixedPepper,
                    SandwichIngredientMushroom: req.body.ingMushroom,
                    SandwichIngredientJalapeno: req.body.ingJalapeno,
                    SandwichIngredientBananaPepper: req.body.ingBananaPepper,
                    SandwichIngredientPickle: req.body.ingPickle,
                    SandwichIngredientBlackOlive: req.body.ingBlackOlive,
                    SandwichIngredientCucumber: req.body.ingCucumber,
                    SandwichIngredientPineApple: req.body.ingPineApple,
                    SandwichIngredientSandwichLettuce: req.body.ingSandwichLettuce,
                    SandwichIngredientRoastBeef: req.body.ingRoastBeef,
                    SandwichIngredientHam: req.body.ingHam,
                    SandwichIngredientTurkey: req.body.ingTurkey,
                    SandwichIngredientSalami: req.body.ingSalami,
                    SandwichIngredientPepperoni: req.body.ingPepperoni,
                    SandwichIngredientBaconBit: req.body.ingBaconBit
                    // SandwichIngredientBaconStrip: req.body.ingBaconStrip
                    // SandwichIngredientPepJack: req.body.,
                    // SandwichIngredientCheddar: req.body.,
                    // SandwichIngredientAmerican: req.body.,
                    // SandwichIngredientColbyJack: req.body.,
                    // SandwichIngredientProvolone: req.body.,
                    // SandwichIngredientSwiss: req.body.,
                    // SandwichIngredientSmokedGuda: req.body.,
                    // SandwichIngredientBurgerPatty: req.body.,
                    // SandwichIngredientChickenPatty: req.body.,
                    // SandwichIngredientCrispyChickenPatty: req.body.,
                }
            })
        }
    })
})


module.exports = router;