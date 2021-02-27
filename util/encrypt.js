const bcrypt = require('bcrypt');
const config = require('../config/keys');  

/** Encrypts values provided
* @param value  The value to be returned
* @return   A promise of for the encrypted value ? resolves an encrypted value : rejects an error      
*/
module.exports = value => {
    return new Promise(async (resolve, reject) => {
        const encrypted = await bcrypt.genSalt(config.SALT)
        .then(async salt => {
            return await bcrypt.hash(value, salt)
        .catch(err => reject(err)); 
        })
        .catch(err => reject(err)); 
        return resolve(encrypted); 
    })
}