const Services = require('./Services');
const database = require('../models');
const group = database.groups;

class GroupsServices extends Services {
    constructor() {
        super(group)
    }
}

module.exports = GroupsServices