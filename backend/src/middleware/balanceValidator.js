const { Balance } = require("../models");
const BalanceService = require("../services/BalanceService");

const balanceValidator = {
  async updateBalance(req, res, next) {
    const currentBalance = await BalanceService.calculateBalance(
      req.params.login
    );

    if (!currentBalance) {
      return res
        .status(404)
        .send(JSON.stringify({ message: "User has no transaction history." }));
    }

    const balance = await Balance.update(
      { balance: currentBalance },
      {
        where: {
          login: req.params.login,
        },
      }
    );
    next();
  },
};

module.exports = balanceValidator;
