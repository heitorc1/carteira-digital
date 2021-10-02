const { Movimentacao } = require('../models')

const MovimentacaoController = {
    async salvarMovimentacao(req, res) {
        const user = await Movimentacao.create(req.body)
        return res.status(200).send(JSON.stringify(user))
    }
}

module.exports = MovimentacaoController