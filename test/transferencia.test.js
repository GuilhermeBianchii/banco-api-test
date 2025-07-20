const request = require('supertest');
const { describe, it } = require('mocha')
const { expect } = require('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')
const postTransferencia = require('../fixtures/postTransferencia.json')

describe('Transferências', () => {
     let token
        beforeEach(async () => {
            // Capturar o token de autenticação antes de cada teste
            token = await obterToken('gui.bianchi', '123456')
        })

    describe('POST /transferencias', () => {

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
    describe('GET /transferencias/{id}', () => {
        it('Deve retornar sucesso com 200 e dados iguais ao registro de transferência contido no banco de dados quando o id for válido', async() =>{
           
            const resposta =  await request(process.env.BASE_URL)
                .get('/transferencias/1') // Supondo que o ID 1 exista
                .set('Authorization', `Bearer ${token}`)
                
                
            expect(resposta.status).to.equal(200)
            expect(resposta.body.id).to.equal(1)
            expect(resposta.body.conta_origem_id).to.equal(1)
            expect(resposta.body.conta_destino_id).to.equal(2)
            expect(resposta.body.valor).to.equal(10.00)
        })
    })
    describe('GET /transferencias', () => {
        it('Deve retornar sucesso com 200 e uma lista de transferências com 10 itens', async() => {
            
            const resposta = await request(process.env.BASE_URL)
            .get('/transferencias')
            .set('Authorization', `Bearer ${token}`)
            expect(resposta.status).to.equal(200)
            expect(resposta.body.limit).to.equal(10)
            expect(resposta.body.transferencias).to.have.lengthOf(10)
         
    })
})
})