const { User } = require("../models");
const TransactionService = require("../services/TransactionService");

const UserController = {
  async saveUser(req, res) {
    const data = req.body;

    const user = await User.create(data);

    const firstTransaction = await TransactionService.initialTransaction(
      data.login
    );

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
