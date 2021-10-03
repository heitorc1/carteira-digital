const request = require('supertest')
const app = require('../../src/app')
const factory = require('../utils/factory')
const truncate = require('../utils/truncate')
const faker = require('faker-br')
const bcrypt = require('bcryptjs')
const { Usuario } = require('../../src/models')

describe('Saldo : CRUD', () => {
    beforeEach(async () => {
        await truncate();
    });

    it('deve retornar o saldo do usuario', async () => {
        const usuario = await factory.create('Usuario')

        const response = await request(app)
            .get('/usuario/' + usuario.login)

        expect(response.status).toBe(200)

    })
})