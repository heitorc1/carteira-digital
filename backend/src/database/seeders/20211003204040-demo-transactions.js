"use strict";
const UserService = require("../../services/UserService");

const transactions = [];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const initialDate = new Date("October 01, 2021 03:24:00");
    const finalDate = new Date("October 30, 2021 03:24:00");
    const users = await UserService.getAllUsers();

    for (const user of users) {
      if (user.dataValues.login !== "admin") {
        const initialValue = {
          login_source: "admin",
          login_destination: user.dataValues.login,
          transaction_value: 100,
          date: initialDate,
          created_at: initialDate,
          updated_at: initialDate,
        };
        transactions.push(initialValue);

        for (let i = 0; i < 3; i++) {
          const randomUser = await UserService.getRandomUser();
          if (
            user.dataValues.login !== randomUser.dataValues.login &&
            randomUser.dataValues.login !== "admin"
          ) {
            const transactionDate = new Date(
              initialDate.getTime() +
                Math.random() * (finalDate.getTime() - initialDate.getTime())
            );
            const value = parseFloat(Math.random() * 1000).toFixed(2);
            const transaction = {
              login_source: user.dataValues.login,
              login_destination: randomUser.dataValues.login,
              transaction_value: value,
              date: transactionDate,
              created_at: new Date(),
              updated_at: new Date(),
            };
            transactions.push(transaction);
          }
        }
      }
    }
    return queryInterface.bulkInsert("Transactions", transactions);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Transactions", null, {});
  },
};
