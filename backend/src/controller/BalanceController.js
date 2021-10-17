const { Balance } = require("../models");

const BalanceController = {
  async getBalance(req, res) {
    const login = req.params.login;

    const balance = await Balance.findOne({
      where: {
        login: login,
      },
    });

    return res.status(200).send(JSON.stringify(balance));
  },
};

module.exports = BalanceController;
