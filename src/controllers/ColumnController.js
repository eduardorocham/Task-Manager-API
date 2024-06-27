const Controller = require("./Controller.js");
const ColumnServices = require("../services/ColumnServices");

const columnServices = new ColumnServices();

class ColumnController extends Controller {
  constructor() {
    super(columnServices, "column");
  }

  async getAllColumns(req, res) {
    try {
      const columnsList = await columnServices.getAllColumns();
      return res.status(200).json(columnsList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getOneColumn(req, res) {
    const { id } = req.params;

    try {
      const register = await columnServices.getOneColum(id);

      if (register !== null) {
        return res.status(200).json(register);
      } else {
        return res
          .status(404)
          .json({ message: `${this.entityName} don't found` });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ColumnController;
