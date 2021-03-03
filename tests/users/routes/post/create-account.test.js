const chai = require('chai'); 
const { expect, assert } = require('chai'); 
const chaiHTTP = require('chai-http'); 
chai.use(chaiHTTP); 
const app = require('../../../../index');
const Users = require('../../../../db/models').Users;  

const asyncCreateAccount = async data => {
  const response = await chai.request(app)
  .post('/create-account')
  .send(data) 
  return response; 
}

describe('/create-account', () => {
  const data = {email: 'blank@gmail.com', password: 'password', first_name: 'first', last_name: 'last', address: 'address', phone_number: 'digits', role: 2}
  
  after('User already exists',async () => {
    await Users.destroy({
      where: {email: data.email}
    })
  })


  it('Create a new user account', async () => {
    const response = await asyncCreateAccount(data)
    expect(response.status).equal(201, 'Response should be 201')    
  });

  it('User already exists', async () => {
    const response = await asyncCreateAccount(data); 
    expect(response.status).equal(400, 'Status code should be 400')
  }) 

  it('Missing request body value', async() => {
    data.email = null; 
    const response = await asyncCreateAccount(data); 
    expect(response.status).equal(400, 'Status code should be 400'); 
    data.email = 'blank@gmail.com'
  })

  it('Role cannot be 1', async() => {
    data.role = 1; 
    const response = await asyncCreateAccount(data);
    expect(response.body.role).to.not.equal(1, 'Role 1 is not allowed');  
    expect(response.status).equal(404, 'Status code should be 404')
    data.role = 2; 
  })
})
