const bcrypt = require('bcrypt'); 
const Users = require('../../server/db/models').Users; 
const jwt = require('jsonwebtoken'); 
const config = require('../../config/keys'); 


//Searches for user, if found compares password with the users hash, if passwords match
//user from db is returned, otherwise error message is returned. 
const comparePasswords = async(user) => {
    try{
        const dbUser = await Users.findOne({
            where: {
                email: user.email,
            }
        })
        if (dbUser === null) return ['No user found', null]

        else if (dbUser instanceof Users) {
            const match = await bcrypt.compare(user.password, dbUser.password); 

            if (!match) return ['Incorrect Password', null]

            else return [null, dbUser]
        } 
    }
    catch(err){ 
        console.log(err); 
        return ['Something went wrong', null]; 
    }    
}


// In future iteration generate a private key and use RSA SHA256 for encryption
const newAccessToken = async (user) => {
    const token = await jwt.sign({id: user.id, email: user.email}, config.JWT_SECRET)
    if (token === null) return; 
    else return token; 
}


module.exports = {
    comparePasswords, 
    newAccessToken
}; 