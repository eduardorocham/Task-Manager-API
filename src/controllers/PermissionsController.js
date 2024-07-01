const Controller = require('./Controller')
const PermissionsServices = require('../services/PermissionsServices')
const permissionsServices = new PermissionsServices();

class GroupController extends Controller {
    constructor() {
        super(permissionsServices, "permission")
    }
}

module.exports = GroupController