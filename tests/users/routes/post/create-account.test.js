const request = require('supertest'); 
const app = require('../../../../server');
const Users = require('../../../../db/models').Users;  

const asyncCreateAccount = async data => {
  const response = await request(app)
  .post('/create-account')
  .send(data) 
  return response; 
}

describe('/create-account', () => {
  const data = {
    email: 'blank@gmail.com', 
    password: 'password', 
    first_name: 'first', 
    last_name: 'last', 
    address: 'address', 
    phone_number: 'digits', 
    role: 2
  }

  afterAll(async () => {
    await Users.destroy({
      where: {email: data.email}
    })
  })


  it('Create a new user account', async () => {
    const response = await asyncCreateAccount(data);
    expect(response.status).toBe(201);     
  });

  it('User already exists', async () => {
    const response = await asyncCreateAccount(data); 
    expect(response.status).toBe(400); 
  }) 

  it('Missing request body value', async() => {
    data.email = null; 
    const response = await asyncCreateAccount(data); 
    expect(response.status).toBe(400); 
    data.email = 'blank@gmail.com'; 
  })

  it('Role cannot be 1', async() => {
    data.role = 1; 
    const response = await asyncCreateAccount(data);
    expect(response.body.role).not.toBe(1);   
    expect(response.status).toBe(404); 
    data.role = 2; 
  })
})
