const { User, Balance } = require("../models");

const UserController = {
  async saveUser(req, res) {
    const data = req.body;

    const user = await User.create(data);

    const balance = await Balance.create({
      login: data.login,
      balance: 100,
    });

    return res.status(200).send(JSON.stringify(user));
  },

  async getUser(req, res) {
    const user = await User.findOne({
      where: {
        login: req.params.login,
      },
    });

    return res.status(200).send(JSON.stringify(user));
  },
};

module.exports = UserController;
