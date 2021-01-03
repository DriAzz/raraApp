'use strict';
module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        UserId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        FirstName: DataTypes.STRING,
        LastName: DataTypes.STRING,
        Username: DataTypes.STRING,
        Password: {
            unique: true,
            type: DataTypes.STRING
        },
        Power: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {});
    users.associate = function (models) {
        // associations can be defined here
    };
    return users;
};