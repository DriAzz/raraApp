'use strict';
module.exports = (sequelize, DataTypes) => {
  const allsides = sequelize.define('allsides', {
    SidesID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SidesName: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    SidesPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {});
  allsides.associate = function (models) {
    // associations can be defined here
  };
  return allsides;
};