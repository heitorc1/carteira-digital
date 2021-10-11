const request = require("supertest");
const app = require("../../src/app");
const truncate = require("../utils/truncate");
const { Balance } = require("../../src/models");
const factory = require("../utils/factory");

describe("Balance : CRUD", () => {
  beforeEach(async () => {
    await truncate();
  });

  // Remove balance from user creation
  /* it("it should create balance for user", async () => {
    const user = await factory.build("User");
    const userResponse = await request(app).post("/user").send({
      login: user.login,
      password: user.password,
      name: user.name,
    });

    const userBalance = await factory.build("Balance");
    userBalance.login = user.login;

    const response = await request(app).get("/balance").send({
      login: userBalance.login,
      balance: userBalance.balance,
    });
  }); */

  it("it should return user's balance if login is valid", async () => {
    const user = await factory.build("User");
    const userResponse = await request(app).post("/user").send({
      login: user.login,
      password: user.password,
      name: user.name,
    });

    // Remove balance from user creation
    /* const balance = await factory.build("Balance", {
      login: user.login,
      balance: 100,
    });
    const balanceResponse = await request(app).post("/balance").send({
      login: balance.login,
      balance: balance.balance,
    }); */

    const response = await request(app).get("/balance/" + user.login);

    expect(response.status).toBe(200);
  });

  it("it should return error if login is not valid", async () => {
    const response = await request(app).get("/balance/" + undefined);

    expect(response.status).toBe(404);
  });
});
