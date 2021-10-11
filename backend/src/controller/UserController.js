const { User, Balance } = require("../models");
const UserService = require("../services/UserService");

const UserController = {
  async saveUser(req, res) {
    const data = req.body;

    const { error } = UserService.validateUser(data);
    if (error) {
      return res.status(422).json({
        message: error,
      });
    }

    const loginAlreadyExists = await UserService.checkLogin(data.login);
    if (loginAlreadyExists) {
      err = { message: "Login already exists" };
      return res.status(422).send(JSON.stringify(err));
    }

    const user = await User.create(data);

    const balance = await Balance.create({
      login: data.login,
      balance: 100,
    });

    return res.status(200).send(JSON.stringify(user));
  },

  async getUser(req, res) {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res
        .status(404)
        .send(JSON.stringify({ message: "User not found!" }));
    }
    return res.status(200).send(JSON.stringify(user));
  },
};

module.exports = UserController;
