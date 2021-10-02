const express = require('express');
const router = express.Router();
const saldoController = require('../controller/SaldoController')

router.get('/:login', saldoController.obterSaldo)

module.exports = router