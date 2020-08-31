const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const models = require('../models');

var authService = {
    signUser: function (user) {
        const token = jwt.sign(
            {
                Username: user.Username,
                UserId: user.UserId,
            },
            'secretkey',
            {
                expiresIn: '1h'
            }
        );
        return token;
    },
    hashPassword: function (plaintTextPassword) {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(plaintTextPassword, salt);
        return hash;
    },
    comparePasswords: function (plaintTextPassword, hashedPassword) {
        return bcrypt.compareSync(plaintTextPassword, hashedPassword)
    },
    verifyUser: function (token) {  //<--- receive JWT token as parameter
        try {
            let decoded = jwt.verify(token, 'secretkey'); //<--- Decrypt token using same key used to encrypt
            return models.users.findByPk(decoded.UserId); //<--- Return result of database query as promise
        } catch (err) {
            console.log("Error: " + err);
            return null;
        }
    }
}


module.exports = authService;