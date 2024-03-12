import Controller from "./Controller.js";
import ColumnServices from "../services/ColumnServices.js";

const columnServices = new ColumnServices();

class ColumnController extends Controller {
  constructor() {
    super(columnServices, "column");
  }
}

export default ColumnController;
