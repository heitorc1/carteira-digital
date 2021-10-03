'use strict';
const SaldoController = require('../../controller/SaldoController');
const UsuarioController = require('../../controller/UsuarioController')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const semSaldo = []
    
    const usuarios = await UsuarioController.obterTodosUsuarios()
    
    for(const usuario of usuarios) {
      const user = usuario.dataValues.login
      const saldo = await SaldoController.saldo(user)
      if(saldo === null) {
        const saldoAtual = {
          login: user,
          saldo: 100
        }
        semSaldo.push(saldoAtual)
      }
    }

    return queryInterface.bulkInsert('Saldo', semSaldo)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Saldo', null, {})
  }
};
