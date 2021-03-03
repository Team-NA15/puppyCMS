const config = require('../../../config/keys'); 
const Users = require('../../../db/models').Users; 

/**
 * Retrieves a user by their id and returns instance of User
 * @param {string} id 
 * @return {user} successful ? an instance of the user : message stating user not found || error message 
 */
const getUserById = id => {
    return new Promise( async (resolve, reject) => { 
        const user = await Users.findByPk(id)
        .catch(err => reject(err));  
        if (!user) return reject('Could not retrieve user')
        else if (user instanceof Users) return resolve(user)  
    }); 
}

module.exports = {
    getUserById
}