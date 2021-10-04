const { Saldo, Movimentacao } = require('../models')

const SaldoController = {
    async obterSaldo(req, res) {
        const login = req.params.login

        const saldo = await Saldo.findByPk(login)

        const movimentacoes = await Movimentacao.findAll({
            where: {
                login_origem: login
            },
            order: [
                ['data', 'ASC']
            ]
        })
        
        let valorSaldo = saldo.dataValues.saldo
        movimentacoes.forEach(transacao => {
             valorSaldo += transacao.dataValues.valor_transferido
        })
        saldo.dataValues.saldo = valorSaldo.toFixed(2)

        return res.status(200).send(JSON.stringify(saldo))
    },

    async saldo(login) {
        const saldo = await Saldo.findByPk(login)
        return saldo
    }
}

module.exports = SaldoController