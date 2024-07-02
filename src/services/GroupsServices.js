const Services = require('./Services');
const database = require('../models');
const group = database.groups;
const permissions = database.permissions;
const permissionsGroup = database.permissions_group;

class GroupsServices extends Services {
    constructor() {
        super(group)
    }

    async addPermissionToGroup(dto) {
        await permissionsGroup.create(dto)
    }

    async getPermissionsGroup(dto) {
        return group.findByPk(dto, {
            include: [
                {
                    model: permissions,
                    as: 'permission_group',
                    attributes: ['id', 'name', 'description'],
                    through: {
                        attributes: []
                    }
                }
            ]
        })
    }
}

module.exports = GroupsServices