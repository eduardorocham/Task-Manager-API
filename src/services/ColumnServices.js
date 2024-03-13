import Services from "./Services.js";
import ProjectServices from "./ProjectServices.js";
import { column } from "../models/Column.js";

const projectServices = new ProjectServices();

class ColumnServices extends Services {
  constructor() {
    super(column);
  }

  async createColumn(dataRegister) {
    const newColumn = await super.createRegister(dataRegister);
    const projectFound = await projectServices.getOneRegisterById(
      newColumn.project_id
    );
    projectFound.columns.push(newColumn._id);
    projectFound.save();

    return newColumn;
  }
}

export default ColumnServices;
