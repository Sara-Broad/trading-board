'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    contactName: DataTypes.STRING
    // image
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    // has userPk
  };
  return Post;
};