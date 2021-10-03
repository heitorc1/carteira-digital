const request = require('supertest')
const app = require('../../src/app')
const factory = require('../utils/factory')
const truncate = require('../utils/truncate')

describe('Authentication', () => {
    beforeEach(async () => {
        await truncate();
    });

    it('deve auntenticar com um login valido', async () =>{
        const usuario = await factory.create('Usuario', {
            senha: '123456'
        })

        const response = await request(app)
            .post('/session')
            .send({
                login: usuario.login,
                senha: '123456'
            })
        
        expect(response.status).toBe(200)
    })

    it('nao deve autenticar com um login invalido', async () => {
        const usuario = await factory.create('Usuario', {
            senha: '123456'
        })

        const response = await request(app)
            .post('/session')
            .send({
                login: usuario.login,
                senha: '1581'
            })
        
        expect(response.status).toBe(401) 
    })

    it('deve receber token JWT quando autenticado', async() => {
        const usuario = await factory.create('Usuario', {
            senha: '123456'
        })

        const response = await request(app)
            .post('/session')
            .send({
                login: usuario.login,
                senha: '123456'
            })
        
        expect(response.body).toHaveProperty('token') 
    })
})