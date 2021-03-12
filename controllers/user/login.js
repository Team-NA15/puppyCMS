const bcrypt = require('bcrypt'); 
const Users = require('../../db/models').Users; 
const jwt = require('jsonwebtoken'); 
const config = require('../../config/keys'); 
/**
 * Searches for user, if found compares password with the users hash, if passwords match
 * user from db is returned, otherwise error message is returned.
 * @param {User} user 
 * @return {Array} successful ? null for error and the user found : error message and no user
 */ 
const comparePasswords = async user => {
    try{
        const dbUser = await Users.findOne({
            where: {
                email: user.email,
            }
        })
        .catch(err => err); 
        if (dbUser === null) return [new Error('No user found'), null]
        else if (dbUser instanceof Users) {
            const match = await bcrypt.compare(user.password, dbUser.password)
            .catch(err => err); 

            if (!match) return [new Error('Incorrect Password'), null]
            
            else return [null, dbUser]
        } 
    }
    catch(err){ 
        console.error(err); 
        return Promise.reject(err);  
    }    
}


/**
 * Provided a User instance, creates an access token with their data for auth flow
 * @param {Users} user 
 * @return {string} token if generated : void || error message
 */
const newAccessToken = async (user) => {
    const token = await jwt.sign({id: user.id, email: user.email}, config.JWT_SECRET)
    if (token === null) return; 
    else return token; 
}


module.exports = {
    comparePasswords, 
    newAccessToken
}; 