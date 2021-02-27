const config = require('../../../config/keys'); 
const Users = require('../../../db/models').Users; 


const getUserById = id => {
    return new Promise( async (resolve, reject) => { 
        const user = await Users.findByPk(id); 
        if (!user) return reject('Could not retrieve user')
        else if (user instanceof Users) return resolve(user)  
    }); 
}

module.exports = {
    getUserById
}