'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    text: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    // has userPk
  };
  return Post;
};