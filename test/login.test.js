const request = require('supertest');
const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('Login Tests',() =>{
    describe('Post /login', () => {
        it('Deve retornar 200 com um token em string quando as credenciais estão corretas', async() => {
            const resposta =  await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send( {"username": "gui.bianchi",
                        "senha": "123456"})
                expect(resposta.status).to.equal(200);
                expect(resposta.body.token).to.be.a('string')
    })
})
})