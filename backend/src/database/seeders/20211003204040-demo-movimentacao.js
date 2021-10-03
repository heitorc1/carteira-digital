'use strict';
const UsuarioController = require('../../controller/UsuarioController')

const movimentacoes = []
const dataInicial = new Date('September 17, 2021 03:24:00')
const dataFinal = new Date()

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usuarios = await UsuarioController.obterTodosUsuarios()

    for(const usuario of usuarios) {
      for(let i=0; i<3; i++){
        const usuarioAleatorio = await UsuarioController.usuarioAleatorio()
        if (usuario.dataValues.login !== usuarioAleatorio.dataValues.login) {
          const dataTransacao = new Date(dataInicial.getTime() + Math.random() * (dataFinal.getTime() - dataInicial.getTime()))
          const valor = parseFloat(Math.random() * 2000 - 1000).toFixed(2)
          const dadosSaida = {
            login_origem: usuario.dataValues.login,
            login_destino: usuarioAleatorio.dataValues.login,
            valor_transferido: -valor,
            data: dataTransacao
          }
          const dadosEntrada = {
            login_origem: usuarioAleatorio.dataValues.login,
            login_destino: usuario.dataValues.login,
            valor_transferido: valor,
            data: dataTransacao
          }
          movimentacoes.push(dadosSaida)
          movimentacoes.push(dadosEntrada)
        }
      }
    }
    return queryInterface.bulkInsert('Movimentacao', movimentacoes)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movimentacao', null, {})
  }
};
