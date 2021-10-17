require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? '.env.test' : '.env',
});

const express = require("express");

const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const indexRouter = require("./routes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

module.exports = app;
