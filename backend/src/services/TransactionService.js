const TransactionService = {
  async extract(req, res) {
    const { login } = req.params;

    const transactions = await Transaction.findAll({
      where: {
        login_source: login,
      },
    });
    return res.status(200).send(JSON.stringify(transactions));
  },
};

module.exports = TransactionService;
