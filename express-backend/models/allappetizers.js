'use strict';
module.exports = (sequelize, DataTypes) => {
    const allappetizers = sequelize.define('allappetizers', {
        AppetizerID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        AppetizerName: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        AppetizerPrice: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    }, {});
    allappetizers.associate = function (models) {
        // associations can be defined here
    };
    return allappetizers;
};