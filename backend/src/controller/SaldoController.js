const { Saldo } = require('../models')

const SaldoController = {
    async obterSaldo(req, res) {
        const valor = await Saldo.findByPk(req.params.login)
        return res.status(200).send(JSON.stringify(valor))
    }
}

module.exports = SaldoController