const Users = require('../../../db/models').Users; 
const jwt = require('jsonwebtoken'); 
const config = require('../../../config/keys'); 
const uuid = require('uuid'); 

module.exports = async (req,res) => {
    const user = {
        where: {
            email: 'johnwick@gmail.com'
        }, 
        defaults: {
            password: 'password', 
            first_name: 'john', 
            last_name: 'wick', 
            address: 'New York', 
            phone_number: '958-222-4938', 
            role: 2, 
        }
    }
    const [newUser, created] = await Users.findOrCreate(user); 
    console.log(newUser); 
    if (!created) return res.send('user not created');  
    else return res.send(newUser);  
}