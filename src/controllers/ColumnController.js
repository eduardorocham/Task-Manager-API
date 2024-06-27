const Controller = require("./Controller.js");
const ColumnServices = require("../services/ColumnServices");

const columnServices = new ColumnServices();

class ColumnController extends Controller {
  constructor() {
    super(columnServices, "column");
  }
}

module.exports = ColumnController;
