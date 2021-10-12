var express = require("express");
var router = express.Router();

const transactionController = require("../controller/TransactionController");
const balanceController = require("../controller/BalanceController");
const userController = require("../controller/UserController");
const sessionController = require("../controller/SessionController");

const userValidator = require("../middleware/userValidator");
const balanceValidator = require("../middleware/balanceValidator");

router.post("/user", userValidator.validateUser, userController.saveUser);
router.get("/user/:login", userValidator.userExists, userController.getUser);

router.get(
  "/balance/:login",
  userValidator.userExists,
  balanceValidator.updateBalance,
  balanceController.getBalance
);

router.post("/transaction", transactionController.saveTransaction);
// router.get("/extract/:login", transactionController.extract);

// router.post("/session", sessionController.store);

module.exports = router;
