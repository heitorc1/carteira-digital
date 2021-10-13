const { Transaction } = require("../models");
const { Op } = require("sequelize");

const TransactionController = {
  async saveTransaction(req, res) {
    if (!req.body.date) {
      req.body.date = new Date();
    }

    const data = req.body;
    const transaction = await Transaction.create(data);

    return res.status(200).send(JSON.stringify(transaction));
  },

  async extract(req, res) {
    const { login } = req.params;
    const allTransactions = [];

    const transactions = await Transaction.findAll({
      where: {
        [Op.or]: [
          {
            login_source: login,
          },
          {
            login_destination: login,
          },
        ],
      },
    });

    transactions.forEach((transaction) => {
      if (transaction.login_source === login) {
        transaction.transaction_value = -transaction.transaction_value;
      }
      allTransactions.push(transaction);
    });

    if (!transactions) {
      return res
        .status(404)
        .send(JSON.stringify({ message: "User has no transaction history" }));
    }
    return res.status(200).send(JSON.stringify(allTransactions));
  },
};

module.exports = TransactionController;
