const { Usuario } = require('../models')

const UsuarioController = {
    async salvarUsuario(req, res) {
        const user = await Usuario.create(req.body)
        return res.status(200).send(JSON.stringify(user))
    },

    async obterUsuario(req, res) {
        const user = await Usuario.findByPk(req.params.login)
        return res.status(200).send(JSON.stringify(user))
    }
}

module.exports = UsuarioController