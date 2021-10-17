const { Balance, Transaction } = require("../models");

const BalanceService = {
  async balance(login) {
    const balance = await Balance.findOne({
      where: {
        login: login,
      },
    });
    return balance;
  },

  async calculateBalance(login) {
    const transactions = await Transaction.findAll({
      where: {
        login_source: login,
      },
      order: [["date", "ASC"]],
    });

    let balanceValue = 0;
    if (transactions.length > 0) {
      transactions.forEach((transaction) => {
        balanceValue += transaction.dataValues.transaction_value;
      });
    }

    return balanceValue.toFixed(2);
  },
};

module.exports = BalanceService;
