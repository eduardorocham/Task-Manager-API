'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tasks.belongsTo(models.columns, {
        foreignKey: 'column_id'
      })
      tasks.belongsTo(models.users, {
        foreignKey: 'assigned_to'
      })
    }
  }
  tasks.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tasks',
    defaultScope: {
      attributes: {
        exclude: ['column_id', 'assigned_to']
      }
    }
  });
  return tasks;
};