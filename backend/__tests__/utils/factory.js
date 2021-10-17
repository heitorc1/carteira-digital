const { factory } = require("factory-girl");
const { User, Balance } = require("../../src/models");
const faker = require("faker");
faker.locale = "pt_BR";

factory.define("User", User, {
  login: faker.internet.userName(),
  password: faker.internet.password(10),
  name: faker.name.firstName(),
});

factory.define("Balance", Balance, {
  login: faker.internet.userName(),
  balance: faker.commerce.price(),
});

module.exports = factory;
