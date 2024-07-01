const Services = require('./Services');
const database = require('../models');
const group = database.groups;
const permissionsGroup = database.permissions_group;

class GroupsServices extends Services {
    constructor() {
        super(group)
    }

    async addPermissionToGroup(dto) {
        await permissionsGroup.create(dto)
    }
}

module.exports = GroupsServices