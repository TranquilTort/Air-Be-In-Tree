'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    tree_id: DataTypes.INTEGER,
    reviewer: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    stars: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User,{foreignKey:'reviewer'});
    Review.belongsTo(models.Treehouse,{foreignKey:'tree_id'});
  };
  return Review;
};
