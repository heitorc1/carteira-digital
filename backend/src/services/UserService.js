const { User } = require("../models");
const db = require("../models");

const UserService = {
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
