const { expect } = require('@jest/globals');
const request = require('supertest'); 
const app = require('../../../../index'); 

const asyncSearchDogs = async data => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkNTA5MTliLTVkNmYtNDIwYi04ODU0LWEzMjMyZWE2MTMxZiIsImVtYWlsIjoiY2hhcmxpZV9kYXlAZ21haWwuY29tIiwiaWF0IjoxNjE1OTMyNTMxfQ.XhYbkB8GTBc8V0BD2VHNlz3YG4k6WDNKA6ES53UCc28'; 
    const response = await request(app)
    .get('/search-dogs')
    .set('Authorization', token)
    .send(data); 
    return response; 
}

describe('/GET search-dogs', () => {
    const validQuery = {query: 'brandon'}
    const invalidQuery = {}

    it('should retrieve dogs from query', async () => {
        const response = await asyncSearchDogs(validQuery);
        expect(response.status).toEqual(200); 
    }); 

    it('should not retrieve dogs from invalid query', async () => {
        const response = await asyncSearchDogs(invalidQuery); 
        expect(response.status).toEqual(400); 
    }); 
}); 