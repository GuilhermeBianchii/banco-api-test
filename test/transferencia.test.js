const request = require('supertest');
const { describe, it } = require('mocha')
const { expect } = require('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')
const postTransferencia = require('../fixtures/postTransferencia.json')

describe('Transferências', () => {
    describe('POST /transferencias', () => {
        let token
        beforeEach(async () => {
            // Capturar o token de autenticação antes de cada teste
            token = await obterToken('gui.bianchi', '123456')
        })

        it('Deve retornar 201 se a transferência for maior ou igual a R$ 10,00', async() => {
            const bodyTransferencia = {...postTransferencia}

            const resposta =  await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencia)
            expect(resposta.status).to.equal(201)
           
        })
        it('Deve retornar 422 se a transferência for menor que R$ 10,00', async() => {
            //Capturar o token de autenticação
             const bodyTransferencia = {...postTransferencia}
            bodyTransferencia.valor = 9.99 // Ajustar o valor para menos de R$ 10,00
            
            
            const resposta =  await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencia);
            expect(resposta.status).to.equal(422)
            
        })
    })
})