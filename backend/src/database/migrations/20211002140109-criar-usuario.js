'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Usuario', {
      login: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      senha: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      nome: {
        type: Sequelize.DataTypes.STRING,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Usuario')
  }
};
