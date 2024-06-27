'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class columns extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      columns.belongsTo(models.projects, {
        foreignKey: 'project_id'
      })
      columns.hasMany(models.tasks, {
        foreignKey: 'column_id'
      })
    }
  }
  columns.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'columns',
  });
  return columns;
};