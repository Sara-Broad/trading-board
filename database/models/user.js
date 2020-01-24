'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    // phone
    // address?
    // password
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    // belongs to posts
  };
  return User;
};