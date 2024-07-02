const Router = require('express');
const GroupController = require('../controllers/GroupController')
const groupController = new GroupController()

const groupsRoutes = Router();

groupsRoutes.get("/groups", (req, res) =>
    groupController.getAll(req, res)
);
groupsRoutes.get("/groups/:id", (req, res) =>
    groupController.getOneById(req, res)
);
groupsRoutes.get("/groups/:id/permissions", (req, res) =>
    groupController.getPermissionsGroup(req, res)
);
groupsRoutes.post("/group", (req, res) =>
    groupController.create(req, res)
);
groupsRoutes.post("/group/:id/permission", (req, res) =>
    groupController.addPermissionToGroup(req, res)
);
groupsRoutes.put("/group/:id", (req, res) =>
    groupController.update(req, res)
);
groupsRoutes.delete("/group/:id", (req, res) =>
    groupController.delete(req, res)
);

module.exports = groupsRoutes;