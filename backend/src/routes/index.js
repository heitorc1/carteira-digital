var express = require("express");
var router = express.Router();

const transactionController = require("../controller/TransactionController");
const balanceController = require("../controller/BalanceController");
const userController = require("../controller/UserController");
const sessionController = require("../controller/SessionController");

router.post("/user", userController.saveUser);
router.get("/user/:id", userController.getUser);

router.get("/balance/:login", balanceController.getBalance);
router.post("/balance", balanceController.saveBalance);

router.post("/transaction", transactionController.saveTransaction);
// router.get("/extract/:login", transactionController.extract);

// router.post("/session", sessionController.store);

module.exports = router;
