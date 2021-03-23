const { expect } = require('@jest/globals');
const request = require('supertest'); 
const app = require('../../../../server'); 

const asyncLogin = async data => {
    const response = await request(app)
    .post('/login')
    .send(data); 
    return response; 
}

describe('/POST login', () => {
    it('should login the user', async() => {
        const data = {email: 'charlie_day@gmail.com', password: 'password'}; 
        const response = await asyncLogin(data); 
        expect(response.status).toBe(200); 
        expect(response.body.access_token).toBeDefined(); 
    }); 

    it('should be missing fields', async() => {
        const data = {password: 'password'}; 
        const response = await asyncLogin(data); 
        expect(response.status).toBe(400); 
        expect(response.badRequest).toBe(true);
        expect(response.error).toBeDefined();  
    });

    it('should be incorrect password/username', async() => {
        const data = {email: 'charlie_day@gmail.com', password: 'passwod'};
        const response = await asyncLogin(data); 
        expect(response.status).toBe(400); 
        expect(response.badRequest).toBe(true);
        expect(response.error).toBeDefined(); 
    }); 
})