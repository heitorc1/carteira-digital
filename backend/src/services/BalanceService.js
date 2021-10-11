const Joi = require("joi");
const { Balance } = require("../models");
const db = require("../models");

const BalanceService = {
  async balance(login) {
    const balance = await Balance.findByPk(login);
    return balance;
  },
};

module.exports = BalanceService;
