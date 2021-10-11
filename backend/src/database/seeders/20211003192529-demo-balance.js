"use strict";
const SaldoController = require("../../controller/SaldoController");
const UsuarioController = require("../../controller/UsuarioController");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const noBalance = [];

    const users = await UsuarioController.obterTodosUsuarios();

    for (const user of users) {
      const person = user.dataValues.login;
      const saldo = await SaldoController.saldo(person);
      if (saldo === null) {
        const balance = {
          login: person,
          saldo: 100,
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
