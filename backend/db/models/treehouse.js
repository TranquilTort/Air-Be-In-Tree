'use strict';
module.exports = (sequelize, DataTypes) => {
  const Treehouse = sequelize.define('Treehouse', {
    owner: DataTypes.NUMBER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    tree_type: DataTypes.NUMBER
  }, {});
  Treehouse.associate = function(models) {
    Treehouse.belongsTo(models.User,{foreignKey:'owner'});
    Treehouse.belongsTo(models.TreeType, {foreignKey:'tree_type'});
    Treehouse.hasMany(models.Review, {foreignKey:'tree_id'})
    
  };
  return Treehouse;
};
