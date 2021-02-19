const bcrypt = require('bcrypt'); 
const config = require('../../config/keys'); 

const encryptPassword = (password) => {
    return new Promise ((resolve, reject) => {
        bcrypt.hash(password, config.SALT)
        .then( hash => {
            resolve(hash); 
        })
        .catch( err => {
            reject(err); 
        })
    })
    .catch( err => {
        console.log(err); 
        return err; 
    })
}

module.exports = {
    encryptPassword,
}