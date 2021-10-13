const request = require("supertest");
const app = require("../../src/app");
const factory = require("../utils/factory");
const truncate = require("../utils/truncate");
const bcrypt = require("bcryptjs");
const { User } = require("../../src/models");

describe("User : CRUD", () => {
  beforeEach(async () => {
    await truncate();
    const admin = await User.create({
      login: "admin",
      password: "admin",
      name: "System Admin",
    });
  });

  it("it should create a valid user", async () => {
    const user = await factory.build("User");

    const response = await request(app).post("/user").send({
      login: user.login,
      password: user.password,
      name: user.name,
    });

    expect(response.status).toBe(200);
  });

  it("it should encrypt the password", async () => {
    const user = await factory.create("User");

    const compareHash = await bcrypt.compare(user.plainPassword, user.password);

    expect(compareHash).toBe(true);
  });

  it("it should not create user without login", async () => {
    const user = await factory.build("User");

    const response = await request(app).post("/user").send({
      password: user.password,
      name: user.name,
    });

    expect(response.status).toBe(422);
  });

  it("it should not create user without password", async () => {
    const user = await factory.build("User");

    const response = await request(app).post("/user").send({
      login: user.login,
      name: user.name,
    });

    expect(response.status).toBe(422);
  });

  it("it should not create user without name", async () => {
    const user = await factory.build("User");

    const response = await request(app).post("/user").send({
      login: user.login,
      password: user.password,
    });

    expect(response.status).toBe(422);
  });

  it("it should get a user if login is valid", async () => {
    const newUser = await factory.build("User");
    const user = await User.create({
      login: newUser.login,
      password: newUser.password,
      name: newUser.name,
    });

    const response = await request(app).get("/user/" + user.login);

    expect(response.status).toBe(200);
  });

  it("it should return error if id is invalid", async () => {
    const response = await request(app).get("/user/" + undefined);

    expect(response.status).toBe(404);
  });
});
