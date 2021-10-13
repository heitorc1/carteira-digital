"use strict";
const BalanceService = require("../../services/BalanceService");
const UserService = require("../../services/UserService");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const noBalance = [];

    const users = await UserService.getAllUsers();

    for (const user of users) {
      const person = user.dataValues.login;
      const currentBalance = await BalanceService.balance(person);
      if (currentBalance === null) {
        const balance = {
          login: person,
          balance: 100,
          created_at: new Date(),
          updated_at: new Date(),
        };
        noBalance.push(balance);
      }
    }

    return queryInterface.bulkInsert("Balance", noBalance);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Balance", null, {});
  },
};
