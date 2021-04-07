const { expect } = require('@jest/globals');
const request = require('supertest'); 
const app = require('../../../../server'); 

const getToken = async () => {
    const access = await request(app)
    .post('/login')
    .send({email: "charlie_day@gmail.com", password: "password"});
    return access.body.access_token; 
}

const asyncSearchDogs = async (data, token) => { 
    const response = await request(app)
    .get('/search-dogs')
    .set('Authorization', token)
    .send(data); 
    return response; 
}

describe('/GET search-dogs', () => {
    const validQuery = {query: 'brandon'}
    const invalidQuery = {}
    let token; 

    beforeAll(async () => {
        token = await getToken(); 
    }); 

    it('should retrieve dogs from query', async () => {
        const response = await asyncSearchDogs(validQuery, token);
        expect(response.status).toEqual(200); 
    }); 

    it('should not retrieve dogs from invalid query', async () => {
        const response = await asyncSearchDogs(invalidQuery, token); 
        expect(response.status).toEqual(400); 
    }); 
}); 