const bcrypt = require('bcrypt'); 
const config = require('../../../config/keys'); 
const Users = require('../../../db/models').Users; 

const createAccount = async user => {
    const [newUser, created] = await Users.findOrCreate(user)
    .catch(err => {
        console.error(err); 
        Promise.reject(err); 
    }); 
    if (!created) return Promise.resolve('User already exists'); 
    return Promise.resolve(newUser); 
}

module.exports = {
    createAccount,
}