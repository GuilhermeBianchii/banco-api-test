const request = require('supertest');
const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('Transferências', () => {
    describe('POST /transferencias', () => {
        it('Deve retornar 201 se a transferência for maior ou igual a R$ 10,00', async() => {
             //Capturar o token de autenticação
             const respostaLogin =  await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({"username": "gui.bianchi",
                        "senha": "123456" })
            const token = respostaLogin.body.token;
            
            const resposta =  await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                        contaOrigem: 1,
                        contaDestino: 2,
                         valor: 10.00,
                         token: "string"});
            expect(resposta.status).to.equal(201);
           
        })
        it('Deve retornar 422 se a transferência for menor que R$ 10,00', async() => {
            //Capturar o token de autenticação
             const respostaLogin =  await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({"username": "gui.bianchi",
                        "senha": "123456" })
            const token = respostaLogin.body.token;
            
            const resposta =  await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                        contaOrigem: 1,
                        contaDestino: 2,
                         valor: 9.99,
                         token: "string"});
            expect(resposta.status).to.equal(422);
            
        })
    })
})