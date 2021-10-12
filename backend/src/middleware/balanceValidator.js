const { Balance } = require("../models");
const BalanceService = require("../services/BalanceService");

const balanceValidator = {
  async updateBalance(req, res, next) {
    const initialBalance = await Balance.findOne({
      where: {
        login: req.params.login,
      },
    });

    if (!initialBalance) {
      return res
        .status(404)
        .send(JSON.stringify({ message: "User has no balance registred." }));
    }

    const currentBalance = await BalanceService.calculateBalance(
      req.params.login,
      initialBalance
    );

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
