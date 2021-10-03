'use strict';
const faker = require('faker-br')
const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const pessoas = []
    for (let i = 0; i < 10; i++) {
      const pessoa = {
        login: faker.internet.userName(),
        senha: await bcrypt.hash(faker.internet.password(), 8),
        nome: faker.name.firstName()
      }
      pessoas.push(pessoa)
    }

    return queryInterface.bulkInsert('Usuario', pessoas)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuario', null, {})
  }
};
