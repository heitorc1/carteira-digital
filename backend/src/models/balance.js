"use strict";
const { Sequelize, Model } = require("sequelize");
const { User } = require("../models/user");

module.exports = (sequelize, DataTypes) => {
  class Balance extends Model {}
  Balance.init(
    {
      login: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: User,
          key: "login",
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
        },
      },
      balance: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Balance",
      tableName: "Balance",
    }
  );
  return Balance;
};
