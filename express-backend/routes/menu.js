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
                res.render('noAccess', {});
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
                    PizzaIngredientSauceType: req.body.ingSauceType,
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
                    PizzaIngredientBlackOlive: req.body.ingBlackOlive,
                    PizzaIngredientSourKrout: req.body.ingSourKrout,
                    PizzaIngredientShreddedLettuce: req.body.ingShreddedLettuce
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

router.put("/edit/pizzas/:id", function (req, res, next) {
    let pizzaID = parseInt(req.params.id);

    models.allpizza.update(req.body, { where: { PizzaID: pizzaID } })
        .then(result => res.redirect('/admin/profile'))
        .catch(err => {
            res.status(400);
            res.send("There was a problem updating the pizza.");
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
                    SandwichIngredientSauceType: req.body.ingSauceType,
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
                    SandwichIngredientBaconBit: req.body.ingBaconBit,
                    SandwichIngredientBaconStrip: req.body.ingBaconStrip,
                    SandwichIngredientFirstCheese: req.body.ingFirstCheese,
                    SandwichIngredientSecondaryCheese: req.body.ingSecondaryCheese,
                    SandwichIngredientBurgerPatty: req.body.ingBurgerPatty,
                    SandwichIngredientChickenPatty: req.body.ingChickenPatty,
                    SandwichIngredientCrispyChickenPatty: req.body.ingCrispChickenPatty
                }
            });
        }
    });
});



//Salad Routes
router.get('/edit/salads', function (req, res, next) {
    let token = req.cookies.jwt;
    authService.verifyUser(token)
        .then(user => {
            if (user.Power == true) {
                models.allsalads.findAll({}).then(saladFound => {
                    res.render('adminEditSalads', {
                        salads: saladFound
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

// router.post('/edit/salads', function (req, res, next) {
//     let token = req.cookies.jwt;
//     authService.verifyUser(token).then(user => {
//         models.allsalads.findOrCreate({
//             where: {
//                 SaladName: req.body.saladname
//             },
//             defaults: {
//                 SaladPrice: req.body.saladprice,
//                 SaladIngredient: req.body.,
//                 SaladIngredient: req.body.,
//                 SaladIngredient: req.body.,
//                 SaladIngredient: req.body.,
//                 SaladIngredient: req.body.,
//                 SaladIngredient: req.body.,
//                 SaladIngredient: req.body.,
//                 SaladIngredient: req.body.,
//                 SaladIngredient: req.body.,
//                 SaladIngredient: req.body.,
//             }
//         })
//     })
// })



//Appetizers Route

router.get('/edit/appetizers', function (req, res, next) {
    let token = req.cookies.jwt;
    authService.verifyUser(token)
        .then(user => {
            if (user.Power == true) {
                models.allappetizer.findAll({}).then(appetizerFound => {
                    res.render('adminEditAppet', {
                        appetizers: appetizerFound
                    })
                });
            } else if (user.Power == false) {
                res.status(401);
                res.render('noAccess', {});
            } else {
                res.status(401);
                res.send('Must be logged in');
            }
        });
});



//Sides Route
router.get('/edit/sides', function (req, res, next) {
    let token = req.cookies.jwt;
    authService.verifyUser(token)
        .then(user => {
            if (user.Power == true) {
                models.allsides.findAll({}).then(sideFound => {
                    res.render('adminEditSides', {
                        sides: sideFound
                    })
                });
            } else if (user.Power == false) {
                res.status(401);
                res.render('noAccess', {});
            } else {
                res.status(401);
                res.send('Must be logged in');
            }
        });
});

module.exports = router;