'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.belongsTo(models.User, { foreignKey: 'user_id' });
      Category.hasMany(models.Transaction, { foreignKey: 'category_id' });
      Category.hasMany(models.Plan, { foreignKey: 'category_id' });
    }
  };
  Category.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
