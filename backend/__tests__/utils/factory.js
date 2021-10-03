const { factory } = require('factory-girl')
const { Usuario, Movimentacao } = require('../../src/models')
const faker = require('faker-br')

factory.define('Usuario', Usuario, {
    login: faker.internet.userName,
    senha: faker.internet.password,
    nome: faker.name.firstName
})

// factory.define('Movimentacao', )


module.exports = factory