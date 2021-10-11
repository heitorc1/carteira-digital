"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Transactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      login_destination: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: {
            tableName: "Users",
          },
          key: "login",
        },
      },
      login_source: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: {
            tableName: "Users",
          },
          key: "login",
        },
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      transaction_value: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Transactions");
  },
};
