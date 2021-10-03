const { Movimentacao } = require('../models')
const { Op } = require("sequelize");

const MovimentacaoController = {
    async salvarMovimentacao(req, res) {
        const user = await Movimentacao.create(req.body)
        return res.status(200).send(JSON.stringify(user))
    },

    async extrato(req, res) {
        const { login } = req.params
        
        const movimentacoes = await Movimentacao.findAll({
            where: {
                login_origem: login
            }
        })
        return res.status(200).send(JSON.stringify(movimentacoes))
    }
}

module.exports = MovimentacaoController