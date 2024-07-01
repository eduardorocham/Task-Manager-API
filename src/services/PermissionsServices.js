const Services = require('./Services');
const database = require('../models');
const permission = database.permissions;

class PermissionsServices extends Services {
    constructor() {
        super(permission)
    }
}

module.exports = PermissionsServices