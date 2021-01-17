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
                models.allpizzas.findAll({}).then(pizzaFound => {
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
            models.allpizzas.findOrCreate({
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
                    PizzaIngredientPickles: req.body.ingPickle,
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
router.get('/pizzas/1', function (req, res, next) {
    models.allpizzas.findAll({
        where: {
            PizzaID: {
                [Op.gt]: 0,
                [Op.lt]: 7
            }
        }
    }).then(allpizzasFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(allpizzasFound));
        console.log(allpizzasFound);
    });
});

router.get('/pizzas/2', function (req, res, next) {
    models.allpizzas.findAll({
        where: {
            PizzaID: {
                [Op.gt]: 6,
                [Op.lt]: 12
            }
        }
    }).then(allpizzasFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(allpizzasFound));
        console.log(allpizzasFound);
    });
});

router.put("/edit/pizzas/:id", function (req, res, next) {
    let pizzaID = parseInt(req.params.id);

    models.allpizzas.update(req.body, { where: { PizzaID: pizzaID } })
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
                models.allsandwiches.findAll({}).then(sandwichFound => {
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
            models.allsandwiches.findOrCreate({
                where: {
                    SandwichName: req.body.sandwichname
                },
                defaults: {
                    SandwichIngredientFirstCheese: req.body.ingFirstCheese,
                    SandwichIngredientSecondaryCheese: req.body.ingSecondaryCheese,
                    SandwichPrice: req.body.sandwichprice,
                    SandwichIngredientSauceType1: req.body.ingSauceType1,
                    SandwichIngredientSauceType2: req.body.ingSauceType2,
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
                    SandwichIngredientBurgerPatty: req.body.ingBurgerPatty,
                    SandwichIngredientChickenPatty: req.body.ingChickenPatty,
                    SandwichIngredientCrispyChickenPatty: req.body.ingCrispyChicken
                }
            }).spread(function (result, created) {
                if (created) {
                    res.redirect('/menu/edit/sandwiches');
                    console.log(result);
                } else {
                    res.send('Was not created');
                }
            });
        }
    });
});

// Query for all sandwiches
router.get('/allsandwiches', function (req, res, next) {
    models.allsandwiches.findAll({
        where: {
            SandwichID: {
                [Op.gt]: 0
            }
        }
    }).then(allsandwichesFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(allsandwichesFound));
        console.log(allsandwichesFound);
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

router.post('/edit/salads', function (req, res, next) {
    let token = req.cookies.jwt;
    authService.verifyUser(token).then(user => {
        if (user.Power == true) {
            models.allsalads.findOrCreate({
                where: {
                    SaladName: req.body.saladname
                },
                defaults: {
                    SaladPrice: req.body.saladprice,
                    SaladIngredientMushroom: req.body.ingMushroom,
                    SaladIngredientMixedPepper: req.body.ingMixedPep,
                    SaladIngredientTomato: req.body.ingTomato,
                    SaladIngredientOnion: req.body.ingOnion,
                    SaladIngredientJalapeno: req.body.ingJalapeno,
                    SaladIngredientPineapple: req.body.ingPineapple,
                    SaladIngredientBananaPep: req.body.ingBPepper,
                    SaladIngredientPickle: req.body.ingPickle,
                    SaladIngredientBlackOlive: req.body.ingBlackOlive,
                    SaladIngredientCucumber: req.body.ingCucumber,
                    SaladIngredientHam: req.body.ingHam,
                    SaladIngredientTurkey: req.body.ingTurkey,
                    SaladIngredientRoastBeef: req.body.ingRoastBeef,
                    SaladIngredientSalami: req.body.ingSalami,
                    SaladIngredientCanadianBacon: req.body.ingCanBacon,
                    SaladIngredientBaconBits: req.body.ingBaconBit,
                    SaladIngredientBaconStrips: req.body.ingBaconStrip,
                    SaladIngredientBeefCrumble: req.body.ingBeefCrumble,
                    SaladIngredientSausage: req.body.ingSausage,
                    SaladIngredientPepperoni: req.body.ingPepperoni,
                    SaladIngredientBurgerPatty: req.body.ingBurgerPatty,
                    SaladIngredientCrispyChicken: req.body.ingCrispyChicken,
                    SaladIngredientChickenPatty: req.body.ingChickenPatty
                }
            }).spread(function (result, created) {
                if (created) {
                    res.redirect('/menu/edit/salads');
                    console.log(result);
                } else {
                    res.send('Was not created');
                }
            });
        }
    });
});

// Query for all salads
router.get('/allsalads', function (req, res, next) {
    models.allsalads.findAll({
        where: {
            SaladID: {
                [Op.gt]: 0
            }
        }
    }).then(allsaladsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(allsaladsFound));
        console.log(allsaladsFound);
    });
});


//Appetizers Route

router.get('/edit/appetizers', function (req, res, next) {
    let token = req.cookies.jwt;
    authService.verifyUser(token)
        .then(user => {
            if (user.Power == true) {
                models.allappetizers.findAll({}).then(appetizerFound => {
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

router.post('/edit/appetizers', function (req, res, next) {
    let token = req.cookies.jwt;
    authService.verifyUser(token).then(user => {
        if (user.Power == true) {
            models.allappetizers.findOrCreate({
                where: {
                    AppetizerName: req.body.appetizername
                },
                defaults: {
                    AppetizerPrice: req.body.appetizerprice
                }
            }).spread(function (result, created) {
                if (created) {
                    res.redirect('/menu/edit/appetizers');
                    console.log(result);
                } else {
                    res.send('Was not created');
                }
            });
        }
    });
});

// Query for all appetizers
router.get('/allappetizers', function (req, res, next) {
    models.allappetizers.findAll({
        where: {
            AppetizerID: {
                [Op.gt]: 0
            }
        }
    }).then(allappetizersFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(allappetizersFound));
        console.log(allappetizersFound);
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

router.post('/edit/sides', function (req, res, next) {
    let token = req.cookies.jwt;
    authService.verifyUser(token).then(user => {
        if (user.Power == true) {
            models.allsides.findOrCreate({
                where: {
                    SidesName: req.body.sidesname
                },
                defaults: {
                    SidesPrice: req.body.sidesprice
                }
            }).spread(function (result, created) {
                if (created) {
                    res.redirect('/menu/edit/sides');
                    console.log(result);
                } else {
                    res.send('Was not created');
                }
            });
        }
    });
});

// Query for all sides
router.get('/allsides', function (req, res, next) {
    models.allsides.findAll({
        where: {
            SidesID: {
                [Op.gt]: 0
            }
        }
    }).then(allsidesFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(allsidesFound));
        console.log(allsidesFound);
    });
});

module.exports = router;