const { Usuario } = require('../models')

class SessionController {
    async store(req, res) {
        const { login, senha } = req.body

        const usuario = await Usuario.findByPk(login)

        if(!usuario) {
            return res.status(401).json({ message: 'Usuário não encontrado' })
        }

        if(!await usuario.checarSenha(senha)) {
            return res.status(401).json({ message: 'Senha incorreta' })
        }

        return res.json({ 
            usuario,
            token: usuario.criarToken()
        })
    }
}

module.exports = new SessionController()