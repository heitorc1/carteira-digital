const request = require('supertest')
const app = require('../../src/app')
const factory = require('../utils/factory')
const truncate = require('../utils/truncate')
const faker = require('faker-br')
const bcrypt = require('bcryptjs')
const { Usuario } = require('../../src/models')

describe('Usuario : CRUD', () => {
    beforeEach(async () => {
        await truncate();
    });

    it('deve criar um usuario com dados validos e senha encriptada', async () => {
        const usuario = await Usuario.create({
            login: faker.internet.userName(),
            senha: faker.internet.password(),
            nome: faker.name.firstName()
        })

        const hash = await bcrypt.hash(usuario.senhaTexto, 8)

        const compareHash = await bcrypt.compare(usuario.senhaTexto, usuario.senha)

        expect(compareHash).toBe(true)
    })

    it('deve retornar um usuário', async () => {
        const usuario = await factory.create('Usuario')

        const response = await request(app)
            .get('/usuario/' + usuario.login)

        expect(response.status).toBe(200)

    })
})