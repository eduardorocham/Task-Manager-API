'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {  
      projects.belongsToMany(models.users, {
        through: models.users_projects,
        as: 'projects_user',
        foreignKey: 'project_id'
      })
      projects.hasMany(models.columns, {
        foreignKey: 'project_id'
      })
    }
  }
  projects.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'projects',
  });
  return projects;
};