const Controller = require('./Controller')
const GroupsServices = require('../services/GroupsServices')
const groupsServices = new GroupsServices();

class GroupController extends Controller {
    constructor() {
        super(groupsServices, "group")
    }

    async addPermissionToGroup(req, res) {
        const { id : group_id } = req.params;
        const { permission_id } = req.body;
    
        try {
          const newRegister = await groupsServices.addPermissionToGroup({ permission_id, group_id });
    
          const response = {};
          response.message = `Permission added with success to group!`;
          response[this.entityName] = newRegister;
    
          return res.status(201).json(response);
        } catch (error) {
          return res.status(500).json({ error: error.message });
        }
    }

    async getPermissionsGroup(req, res) {
      const { id } = req.params;
  
      try {
        const group = await groupsServices.getPermissionsGroup(id);
  
        if (!group) {
          return res.status(404).json({ message: `Group with id ${id} don't found` });
        }
  
        return res.status(200).json(group);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }
}

module.exports = GroupController