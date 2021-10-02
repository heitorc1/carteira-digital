const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/UsuarioController')

router.post('/', usuarioController.salvarUsuario)
router.get('/:login', usuarioController.obterUsuario)

module.exports = router