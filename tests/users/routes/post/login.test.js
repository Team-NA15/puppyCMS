const { expect } = require('@jest/globals');
const request = require('supertest'); 
const app = require('../../../../index'); 

const asyncLogin = async data => {
    const response = await request(app)
    .post('/login')
    .send(data); 
    return response; 
}

describe('/POST login', () => {
    test('Missing Fields', async() => {
        const data = {password: 'password'}; 
        const response = await asyncLogin(data); 
        expect(response.status).toBe(400); 
        expect(response.badRequest).toBe(true); 
    })

    test('Incorrect Password/Username', async() => {
        const data = {email: 'charlie_day@gmail.com', password: 'passwod'}
        const response = await asyncLogin(data); 
        expect(response.status).toBe(400); 
        expect(response.badRequest).toBe(true);
    })

    //TODO finish tests for story
})