var express = require('express');
var router = express.Router();
var models = require('../models');
var authService = require('../services/auth');


router.get('/signup', function (req, res, next) {
  res.render('adminSignup');
});

router.post('/signup', function (req, res, next) {
  models.users
    .findOrCreate({
      where: {
        Username: req.body.username
      },
      defaults: {
        FirstName: req.body.firstname,
        LastName: req.body.lastname,
        Password: authService.hashPassword(req.body.password)
      }
    })
    .spread(function (result, created) {
      if (created) {
        res.redirect('/admin/login');
      } else {
        res.send('This user already exists');
      }
    });
});


router.get('/login', function (req, res, next) {
  res.render('adminLogin');
});

router.post('/login', function (req, res, next) {
  models.users.findOne({
    where: {
      Username: req.body.username
    }
  }).then(user => {
    if (!user) {
      console.log('User not found')
      return res.render('adminLogin', {
        authMessage: "Wrong Username or Password"
      });
    } else {
      let passwordMatch = authService.comparePasswords(req.body.password, user.Password);
      if (passwordMatch) {
        let token = authService.signUser(user);
        res.cookie('jwt', token);
        res.redirect('/admin/profile');
      } else {
        console.log('Wrong password');
        res.redirect('/admin/login');
      }
    }
  });
});

router.get('/profile', function (req, res, next) {
  let token = req.cookies.jwt;
  authService.verifyUser(token)
    .then(user => {
      if (user.Power == true) {
        res.render('adminProfile', {
          FirstName: user.FirstName,
          Power: user.Power,
          powerMessage: 'Admin'
        });
      } else if (user.Power == false) {
        res.render('userProfile', {
          FirstName: user.FirstName,
          Power: user.Power,
          powerMessage: 'Employee'
        });
      }
    });
});

router.get('/logout', function (req, res, next) {
  res.cookie('jwt', "", { expires: new Date(0) });
  res.redirect('/admin/login');
});

module.exports = router;