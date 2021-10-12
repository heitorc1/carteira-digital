const { Balance, Transaction } = require("../models");

const BalanceService = {
  async balance(login) {
    const balance = await Balance.findByPk(login);
    return balance;
  },

  async calculateBalance(login, balance) {
    const transactions = await Transaction.findAll({
      where: {
        login_source: login,
      },
      order: [["date", "ASC"]],
    });

    let balanceValue = balance.dataValues.balance;
    if (transactions.length > 0) {
      transactions.forEach((transaction) => {
        balanceValue += transaction.dataValues.transaction_value;
      });
    }

    return balanceValue.toFixed(2);
  },
};

module.exports = BalanceService;
