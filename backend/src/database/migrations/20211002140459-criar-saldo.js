'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Saldo", {
      login: {
        type: Sequelize.DataTypes.STRING,
        references: {
          model: {
            tableName: 'Usuario',
          },
          key: 'login'
        },
        primaryKey: true,
        allowNull: false
      },
      saldo: {
        type: Sequelize.DataTypes.FLOAT(10, 8),
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Saldo")
  }
};
