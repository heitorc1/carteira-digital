var express = require('express');
var router = express.Router();

const movimentacaoController = require('../controller/MovimentacaoController')
const saldoController = require('../controller/SaldoController')
const usuarioController = require('../controller/UsuarioController')
const sessionController = require('../controller/SessionController')

router.post('/usuario', usuarioController.salvarUsuario)
router.get('/usuario/:login', usuarioController.obterUsuario)

router.get('/saldo/:login', saldoController.obterSaldo)

router.post('/movimentacao', movimentacaoController.salvarMovimentacao)
router.get('/extrato/:login', movimentacaoController.extrato)

router.post('/session', sessionController.store)

module.exports = router;