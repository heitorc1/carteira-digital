const request = require("supertest");
const app = require("../../src/app");
const factory = require("../utils/factory");
const truncate = require("../utils/truncate");

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("it should authenticate with valid login", async () => {
    const user = await factory.create("User", {
      password: "123456",
    });
    const response = await request(app).post("/session").send({
      login: user.login,
      password: "123456",
    });

    expect(response.status).toBe(200);
  });

  it("it should not authenticate with invalid login", async () => {
    const user = await factory.create("User", {
      password: "123456",
    });

    const response = await request(app).post("/session").send({
      login: user.login,
      password: "121412",
    });

    expect(response.status).toBe(401);
  });

  it("it should recieve a JWT token when authenticate", async () => {
    const user = await factory.create("User", {
      password: "123456",
    });

    const response = await request(app).post("/session").send({
      login: user.login,
      password: "123456",
    });

    expect(response.body).toHaveProperty("token");
  });
});
