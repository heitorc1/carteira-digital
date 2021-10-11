const { Balance, Transaction } = require("../models");
const UserService = require("../services/UserService");

const BalanceController = {
  async saveBalance(req, res) {
    const balance = await Balance.create(req.body);
    return res.status(200).send(JSON.stringify(balance));
  },

  async getBalance(req, res) {
    const login = req.params.login;

    const currentBalance = await Balance.findOne({
      where: {
        login: login,
      },
    });

    if (!currentBalance) {
      const userExists = await UserService.checkLogin(login);
      if (!userExists) {
        return res
          .status(404)
          .send(JSON.stringify({ message: "User is not registered." }));
      }
      return res
        .status(404)
        .send(JSON.stringify({ message: "User has no balance registred." }));
    }

    // Retirar daqui
    const transactions = await Transaction.findAll({
      where: {
        login_source: login,
      },
      order: [["date", "ASC"]],
    });

    let balanceValue = currentBalance.dataValues.balance;
    transactions.forEach((transaction) => {
      balanceValue += transaction.dataValues.transaction_value;
    });
    currentBalance.dataValues.balance = balanceValue.toFixed(2);

    return res.status(200).send(JSON.stringify(currentBalance));
  },
};

module.exports = BalanceController;
