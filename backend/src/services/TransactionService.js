const { Transaction } = require("../models");

const TransactionService = {
  async initialTransaction(login) {
    const transactions = await Transaction.findOne({
      where: {
        login_source: login,
      },
    });
    if (!transactions) {
      const initialValue = {
        login_source: "admin",
        login_destination: login,
        transaction_value: 100,
        date: new Date(),
      };
      const initialTransaction = await Transaction.create(initialValue);
    }
  },
};

module.exports = TransactionService;
