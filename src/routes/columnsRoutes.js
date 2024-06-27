const { Router } = require("express");
const ColumnController = require("../controllers/ColumnController");

const columnController = new ColumnController();

const columnsRoutes = Router();

columnsRoutes.get("/columns", (req, res) => columnController.getAll(req, res));
columnsRoutes.get("/column/:id", (req, res) =>
  columnController.getOneById(req, res)
);
columnsRoutes.post("/column", (req, res) =>
  columnController.addColumn(req, res)
);
columnsRoutes.put("/column/:id", (req, res) =>
  columnController.update(req, res)
);
columnsRoutes.delete("/column/:id", (req, res) =>
  columnController.delete(req, res)
);

module.exports = columnsRoutes;
