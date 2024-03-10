class Controller {
    constructor(entityService, entityName) {
        this.entityService = entityService
        this.entityName = entityName
    }

    async getAll(req, res) {
        try {
            const registersList = await this.entityService.getAllRegisters()
            return res.status(200).json(registersList)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async getOndeById(req, res) {
        const { id } = req.params

        try {
            const register = await this.entityService.getOneRegisterById(id)

            if (register !== null) {
                return res.status(200).json(register)
            } else {
                return res.status(404).json({ message: `${this.entityName} don't found` })
            }
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async create(req, res) {
        const dataToCreate = req.body

        try {
            const newRegister = await this.entityService.createRegister(dataToCreate)

            const response = {}
            response.message = `${this.entityName} created with success!`
            response[this.entityName] = newRegister

            return res.status(201).json(response)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async update(req, res) {
        const { id } = req.params
        const dataToUpdate = req.body

        try {
            const updatedRegister = await this.entityService.createRegister(id, dataToUpdate)
            if (updatedRegister !== null) {
                return res.status(200).json({ message: `${this.entityName} width id ${id} updated with success!` })
            } else {
                return res.status(404).json({ message: `${this.entityName} don't found` })
            }
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async delete(req, res) {
        const { id } = req.params

        try {
            const registerToDelete = await this.entityService.updateRegister(id)
            if (registerToDelete !== null) {
                return res.status(200).json({ message: `${this.entityName} width id ${id} deleted with success!` })
            } else {
                return res.status(404).json({ message: `${this.entityName} don't found` })
            }
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}

export default Controller