const Services = require("./Services");
const database = require("../models");
const column = database.columns;

class ColumnServices extends Services {
  constructor() {
    super(column);
  }

  getAllColumns() {
    return this.model.findAll({
      include: [
        {
          model: database.projects,
          attributes: ['id', 'name']
        }
      ]
    })
  }

  getOneColum(id) {
    return this.model.findOne({
      include: [
        {
          model: database.projects,
          attributes: ['id', 'name']
        }
      ],
      where: {
        id
      }
    })
  }

  getColumnWithProjectData(dto) {
    return this.model.findOne({
      where: {
        id: dto
      },
      include: {
        model: database.projects,
        include: {
          model: database.users,
          as: 'users_project',
          through: {
            attributes: []
          }
        }
      }
    });
  }
}

module.exports = ColumnServices;
