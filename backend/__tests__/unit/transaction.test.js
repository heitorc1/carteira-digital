const request = require("supertest");
const app = require("../../src/app");
const truncate = require("../utils/truncate");
const faker = require("faker");
const factory = require("../utils/factory");
const UserService = require("../../src/services/UserService");

describe("Transaction : CRUD", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("it should register a transaction", async () => {
    const firstUser = {
      login: faker.internet.userName(),
      password: faker.internet.password(10),
      name: faker.name.firstName(),
    };
    const firstUserResponse = await request(app).post("/user").send(firstUser);

    const secondUser = {
      login: faker.internet.userName(),
      password: faker.internet.password(10),
      name: faker.name.firstName(),
    };
    const secondUserResponse = await request(app)
      .post("/user")
      .send(secondUser);

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
