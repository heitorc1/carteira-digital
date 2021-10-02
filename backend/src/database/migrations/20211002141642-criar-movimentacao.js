'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Movimentacao', {
      id_transacao: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      data: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
      login_origem: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        references: {
          model: {
            tableName: 'Usuario',
            schema: 'public'
          },
          key: 'login'
        },
      },
      login_destino: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        references: {
          model: {
            tableName: 'Usuario',
            schema: 'public'
          },
          key: 'login'
        },
      },
      valor_transferido: {
        type: Sequelize.DataTypes.FLOAT(10, 8),
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Movimentacao')
  }
};
