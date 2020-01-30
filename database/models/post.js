'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    neighorhood: DataTypes.STRING,
    contactName: DataTypes.STRING
    // will add image at a later date
  })
  Post.associate = function(models) {
    Post.belongsTo(models.User, {
      as: 'posts',
      foreignKey: {
        name: 'postId'
        // eventually allowNull:false
      }
    })
  };
  return Post;
};
