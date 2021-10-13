const request = require("supertest");
const app = require("../../src/app");
const faker = require("faker");
const { User } = require("../../src/models");
const truncate = require("../utils/truncate");

describe("Transaction : CRUD", () => {
  beforeEach(async () => {
    await truncate();
    const admin = await User.create({
      login: "admin",
      password: "admin",
      name: "System Admin",
    });
  });

  it("it should register a transaction", async () => {
    const firstUser = await User.create({
      login: faker.internet.userName(),
      password: faker.internet.password(10),
      name: faker.name.firstName(),
    });

    const secondUser = await User.create({
      login: faker.internet.userName(),
      password: faker.internet.password(10),
      name: faker.name.firstName(),
    });

    const value = parseFloat(faker.commerce.price());

    const response = await request(app).post("/transaction").send({
      login_source: firstUser.login,
      login_destination: secondUser.login,
      transaction_value: value,
      date: new Date(),
    });

    expect(response.status).toBe(200);
  });
});
