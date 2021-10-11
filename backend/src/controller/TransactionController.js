const { Transaction } = require("../models");

const TransactionController = {
  async saveTransaction(req, res) {
    if (!req.body.date) {
      req.body.date = new Date();
    }

    const data = req.body;
    const transaction = await Transaction.create(data);

    return res.status(200).send(JSON.stringify(transaction));
  },
};

module.exports = TransactionController;
