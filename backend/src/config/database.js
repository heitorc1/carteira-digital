require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? '.env.test' : '.env',
});

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  storage: "./__tests__/database.sqlite",
  define: {
    underscored: true,
    underscoredAll: true,
    timestamps: true,
  },
};
