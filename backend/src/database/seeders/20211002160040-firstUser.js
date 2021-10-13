"use strict";
const { User } = require("../../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const admin = await User.findOne({
      where: {
        login: "admin",
      },
    });
    if (!admin) {
      return queryInterface.bulkInsert("Users", [
        {
          login: "admin",
          password: "admin",
          name: "System Admin",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);
    } else {
      return false;
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
