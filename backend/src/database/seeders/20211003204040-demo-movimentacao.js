"use strict";
const UsuarioController = require("../../controller/UsuarioController");

const transactions = [];
const initialData = new Date("September 17, 2021 03:24:00");
const finalData = new Date();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await UsuarioController.obterTodosUsuarios();

    for (const user of users) {
      for (let i = 0; i < 3; i++) {
        const randomUser = await UsuarioController.usuarioAleatorio();
        if (user.dataValues.login !== randomUser.dataValues.login) {
          const transactionDate = new Date(
            initialData.getTime() +
              Math.random() * (finalData.getTime() - initialData.getTime())
          );
          const value = parseFloat(Math.random() * 2000 - 1000).toFixed(2);
          const sent = {
            login_source: user.dataValues.login,
            login_destination: randomUser.dataValues.login,
            transaction_value: -value,
            date: transactionDate,
          };
          const recieved = {
            login_source: randomUser.dataValues.login,
            login_destination: user.dataValues.login,
            transaction_value: value,
            date: transactionDate,
          };
          transactions.push(sent);
          transactions.push(recieved);
        }
      }
    }
    return queryInterface.bulkInsert("Movimentacao", transactions);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Movimentacao", null, {});
  },
};
