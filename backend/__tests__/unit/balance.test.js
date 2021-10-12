const request = require("supertest");
const app = require("../../src/app");
const truncate = require("../utils/truncate");
const { Balance } = require("../../src/models");
const factory = require("../utils/factory");

describe("Balance : CRUD", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("it should return user's balance if login is valid", async () => {
    const user = await factory.build("User");
    const userResponse = await request(app).post("/user").send({
      login: user.login,
      password: user.password,
      name: user.name,
    });

    const response = await request(app).get("/balance/" + user.login);

    expect(response.status).toBe(200);
  });

  it("it should return error if login is not valid", async () => {
    const response = await request(app).get("/balance/" + undefined);

    expect(response.status).toBe(404);
  });
});
