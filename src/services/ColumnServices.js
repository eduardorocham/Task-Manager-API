const Services = require("./Services");
const database = require("../models");
const column = database.columns;

class ColumnServices extends Services {
  constructor() {
    super(column);
  }

  getAllColumns() {
    return column.findAll({
      include: [
        {
          model: database.projects,
          attributes: ['id', 'name']
        }
      ]
    })
  }

  getOneColum(id) {
    return column.findOne({
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
}

module.exports = ColumnServices;
