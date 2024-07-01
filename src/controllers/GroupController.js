const Controller = require('./Controller')
const GroupsServices = require('../services/GroupsServices')
const groupsServices = new GroupsServices();

class GroupController extends Controller {
    constructor() {
        super(groupsServices, "group")
    }
}

module.exports = GroupController