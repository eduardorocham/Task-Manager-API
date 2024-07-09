const Services = require("./Services")
const database = require("../models")
const user = database.users;
const { hash } = require('bcryptjs')
const uuid = require('uuid')

class UserServices extends Services {
  constructor() {
    super(user);
  }

  async getAllUsers(dto) {
    return user.findAll({
      include: [
        {
          model: database.groups,
          attributes: ['id', 'name']
        }
      ]
    })
  }

  async getOneUser(id) {
    return user.findOne({
      include: [
        {
          model: database.groups,
          attributes: ['id', 'name']
        }
      ],
      where: {
        id
      }
    })
  }

  async createUser(dto) {
    const user = await database.users.findOne({
      where: {
        username: dto.username
      }
    })

    if (user) {
      throw new Error("User with this username already exists")
    }

    try {
      const passwordHash = await hash(dto.password, 8)

      const newUser = await database.users.create({
        id: uuid.v4(),
        username: dto.username,
        first_name: dto.first_name,
        last_name: dto.last_name,
        email: dto.email,
        group_id: dto.group_id,
        password: passwordHash
      })

      const newUserPlain = newUser.toJSON();
      const { password, ...userWithoutPassword } = newUserPlain;
      return userWithoutPassword;
    } catch(error) {
      throw new Error(`Error registering user: ${error}`)
    }
  }
}

module.exports = UserServices
