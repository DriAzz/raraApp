'use strict';
module.exports = (sequelize, DataTypes) => {
  const allappetizer = sequelize.define('allappetizer', {
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
  allappetizer.associate = function (models) {
    // associations can be defined here
  };
  return allappetizer;
};