const { Usuario, Saldo } = require('../models')
const db = require('../models')

const UsuarioController = {
    async salvarUsuario(req, res) {
        const { login, senha, nome} = req.body
        const usuario = await Usuario.create({
            login,
            senha,
            nome
        })
        
        const saldo = await Saldo.create({
            login,
            saldo: 100
        })

        return res.status(200).send(JSON.stringify(usuario))
    },

    async obterUsuario(req, res) {
        const usuario = await Usuario.findByPk(req.params.login)
        return res.status(200).send(JSON.stringify(usuario))
    },

    async obterTodosUsuarios() {
        const usuarios = await Usuario.findAll({
            attributes: ['login']
        })
        return usuarios
    },

    async usuarioAleatorio() {
        const usuario = await Usuario.findOne({
            order: [ 
                db.sequelize.random() 
            ]
        })
        return usuario
    }
}

module.exports = UsuarioController