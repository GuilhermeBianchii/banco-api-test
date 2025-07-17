const request = require('supertest');
const { describe, it } = require('mocha');
const { expect } = require('chai');
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')

describe('Transferências', () => {
    describe('POST /transferencias', () => {
        it('Deve retornar 201 se a transferência for maior ou igual a R$ 10,00', async() => {
             //Capturar o token de autenticação
         
             
            const token =  await obterToken("gui.bianchi", "123456")
            
            const resposta =  await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                        contaOrigem: 1,
                        contaDestino: 2,
                         valor: 10.00,
                         token: "string"})
            expect(resposta.status).to.equal(201)
           
        })
        it('Deve retornar 422 se a transferência for menor que R$ 10,00', async() => {
            //Capturar o token de autenticação
             const token =  await obterToken("gui.bianchi", "123456")
            
            const resposta =  await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                        contaOrigem: 1,
                        contaDestino: 2,
                         valor: 9.99,
                         token: "string"});
            expect(resposta.status).to.equal(422)
            
        })
    })
})