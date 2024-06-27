const uuid = require("uuid")

class Services {
  constructor(model) {
    this.model = model;
  }

  async getAllRegisters() {
    return this.model.findAll({});
  }

  async getOneRegisterById(id) {
    return this.model.findByPk(id);
  }

  async createRegister(registerData) {
    return this.model.create({
      id: uuid.v4(),
      ...registerData
    });
  }

  async updateRegister(id, updatedData) {
    const register = await this.model.findByPk(id);
    if (register) {
      return register.update(updatedData);
    }
    return null;
  }

  async deleteRegister(id) {
    const register = await this.model.findByPk(id);
    if (register) {
      return register.destroy();
    }
    return null;
  }
}

module.exports = Services;
