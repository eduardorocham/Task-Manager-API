
class Services {
    constructor(model) {
        this.model = model
    }

    async getAllRegisters() {
        return this.model.find({})
    }

    async getOneRegisterById(id) {
        return this.model.findById(id)
    }

    async createRegister(registerData) {
        return this.model.create(registerData)
    }

    async updateRegister(id, updatedData) {
        return this.model.findByIdAndUpdate(id, updatedData)
    }

    async deleteRegister(id) {
        return this.model.findByIdAndDelete(id)
    }
}

export default Services