const Services = require("./Services");
const database = require("../models");
const column = database.columns;

class ColumnServices extends Services {
  constructor() {
    super(column);
  }
}

module.exports = ColumnServices;
