const Joi = require("joi");
const { User } = require("../models");
const db = require("../models");

const UserService = {
  validateUser(user) {
    const schema = Joi.object({
      login: Joi.string().min(3).max(50).required(),

      password: Joi.string().min(6).max(12).required(),

      name: Joi.string().min(3).max(50).required(),
    });
    const result = schema.validate(user);
    return result;
  },

  async getRandomUser() {
    const user = await User.findOne({
      order: [db.sequelize.random()],
    });
    return user;
  },

  async checkLogin(login) {
    const user = await User.findOne({
      where: {
        login,
      },
    });
    if (user) return true;
    return false;
  },

  async getAllUsers() {
    const users = await User.findAll({
      attributes: ["login"],
    });
    return users;
  },
};

module.exports = UserService;
