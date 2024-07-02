const database = require('../models')

const permissions = (permissionsList) => {
    return async (req, res, next) => {
        const { userId } = req;

        const user = await database.users.findOne({
            where: {
                id: userId
            },
            include: [
                {
                  model: database.groups,
                  attributes: ['id', 'name']
                }
            ]
        })

        if (!user) {
            return res.status(401).json({ message: "unregistered user" })
        }

        const groupPermissions = await database.groups.findByPk(user.group.id, {
            include: [
                {
                    model: database.permissions,
                    as: 'permission_group',
                    attributes: ['id', 'name', 'description'],
                    through: {
                        attributes: []
                    }
                }
            ]
        })

        const userHasPermission = 
            groupPermissions
            .permission_group
            .map((permission) => permission.name)
            .some((permission) => permissionsList.includes(permission));

        if (!userHasPermission) {
            return res.status(401).json({ message: "user don't have access to this route" });
        }

        return next();
    }
}

module.exports = permissions;