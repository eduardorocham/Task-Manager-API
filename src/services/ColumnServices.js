import Services from "./Services.js";
import { column } from "../models/Column.js";

class ColumnServices extends Services {
  constructor() {
    super(column);
  }
}

export default ColumnServices;
