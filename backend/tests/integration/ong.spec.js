const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () =>{
    beforeEach(async() => {
        await connection.migrate.rollback();//limpar antes de outro teste
        await connection.migrate.latest();
    });

    afterAll(async() => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () =>{
        const response = await request(app).post('/ongs').send({
            name : "APAE2",
            email : "apae@ong.com.br",
            whatsapp : "6700000000",
            city : "Nova Andradina",
            uf : "MS"
        });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});