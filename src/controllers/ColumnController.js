import Controller from "./Controller.js";
import ColumnServices from "../services/ColumnServices.js";

const columnServices = new ColumnServices();

class ColumnController extends Controller {
  constructor() {
    super(columnServices, "column");
  }

  async addColumn(req, res) {
    const dataToCreate = req.body;

    try {
      const newColumn = await columnServices.createColumn(dataToCreate);

      const response = {};
      response.message = `${this.entityName} created with success!`;
      response.column = newColumn;

      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default ColumnController;
