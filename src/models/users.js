'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.belongsToMany(models.projects, {
        through: models.users_projects,
        as: 'projects_user',
        foreignKey: 'user_id'
      })
      users.belongsTo(models.groups, {
        foreignKey: 'group_id'
      })
      users.hasMany(models.tasks, {
        foreignKey: 'assigned_to'
      })
    }
  }
  users.init({
    username: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'users',
    defaultScope: {
      attributes: {
        exclude: ['password']
      }
    }
  });
  return users;
};