"use strict";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init(
    {
      login: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      plainPassword: {
        type: DataTypes.VIRTUAL,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      hooks: {
        beforeSave: async (user) => {
          if (user.password) {
            user.plainPassword = user.password;
            user.password = await bcrypt.hash(user.plainPassword, 8);
          }
        },
      },
      sequelize,
      modelName: "User",
      tableName: "Users",
    }
  );

  User.prototype.checkPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  User.prototype.createToken = function () {
    return jwt.sign({ login: this.login }, process.env.APP_SECRET);
  };

  return User;
};
