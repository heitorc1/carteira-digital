const request = require("supertest");
const app = require("../../src/app");
const { User } = require("../../src/models");
const factory = require("../utils/factory");
const truncate = require("../utils/truncate");

describe("Balance : CRUD", () => {
  beforeEach(async () => {
    await truncate();
    const admin = await User.create({
      login: "admin",
      password: "admin",
      name: "System Admin",
    });
  });

  it("it should return user's balance if login is valid", async () => {
    const newUser = await factory.build("User");
    const user = await User.create({
      login: newUser.login,
      password: newUser.password,
      name: newUser.name,
    });
    const response = await request(app).get("/balance/" + user.login);

    expect(response.status).toBe(200);
  });

  it("it should return error if login is not valid", async () => {
    const response = await request(app).get("/balance/" + undefined);

    expect(response.status).toBe(404);
  });
});
