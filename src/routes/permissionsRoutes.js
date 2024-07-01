const Router = require('express');
const PermissionsController = require('../controllers/PermissionsController')
const permissionsController = new PermissionsController()

const permissionsRoutes = Router();

permissionsRoutes.get("/permissions", (req, res) =>
    permissionsController.getAll(req, res)
);
permissionsRoutes.get("/permissions/:id", (req, res) =>
    permissionsController.getOneById(req, res)
);
permissionsRoutes.post("/permission", (req, res) =>
    permissionsController.create(req, res)
);
permissionsRoutes.put("/permission/:id", (req, res) =>
    permissionsController.update(req, res)
);
permissionsRoutes.delete("/permission/:id", (req, res) =>
    permissionsController.delete(req, res)
);

module.exports = permissionsRoutes;