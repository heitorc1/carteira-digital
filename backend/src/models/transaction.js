"use strict";
const { Sequelize, Model } = require("sequelize");
const { User } = require("../models/user");

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {}
  Transaction.init(
    {
      login_destination: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: User,
          key: "login",
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
        },
      },
      login_source: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: User,
          key: "login",
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
        },
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      transaction_value: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Transaction",
      tableName: "Transactions",
    }
  );
  return Transaction;
};
