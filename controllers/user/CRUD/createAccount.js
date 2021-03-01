const bcrypt = require('bcrypt'); 
const config = require('../../../config/keys'); 
const Users = require('../../../db/models').Users; 


const encryptPassword = password => {
    return new Promise ((resolve, reject) => {
        bcrypt.hash(password, config.SALT)
        .then( hash => resolve(hash))
        .catch( err => reject(err))
    })
    .catch( err => {
        console.log(err); 
        return err; 
    })
}

const createAccount = async user => {
    const [newUser, created] = await Users.findOrCreate(user)
    .catch(err => Promise.reject(err)); 
    if (!created) return Promise.resolve('User already exists'); 
    return Promise.resolve(newUser); 
}

module.exports = {
    encryptPassword,
    createAccount,
}