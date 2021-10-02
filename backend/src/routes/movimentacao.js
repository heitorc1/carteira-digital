const express = require('express');
const router = express.Router();
const movimentacaoController = require('../controller/MovimentacaoController')

router.post('/', movimentacaoController.salvarMovimentacao)

module.exports = router