"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const people = [];
    for (let i = 0; i < 10; i++) {
      const person = {
        login: faker.internet.userName(),
        password: await bcrypt.hash(faker.internet.password(), 8),
        name: faker.name.firstName(),
        created_at: new Date(),
        updated_at: new Date(),
      };
      people.push(person);
    }

    return queryInterface.bulkInsert("Users", people);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
