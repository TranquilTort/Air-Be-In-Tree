'use strict';
module.exports = (sequelize, DataTypes) => {
  const TreeType = sequelize.define('TreeType', {
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  TreeType.associate = function(models) {
    TreeType.hasMany(models.Treehouse, {foreignKey:'tree_type'})
  };
  return TreeType;
};
