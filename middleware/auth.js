const { rejects } = require('assert');
const jwt = require('jsonwebtoken'); 
const config = require('../config/keys');
const {getUserById} = require('../controllers/user/CRUD/getUser');  

/**
 * Middleware to validate a user is logged in and authorized, saves user to response for future use
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports = async(req,res,next) => {
    try{
        const decoded = jwt.verify(req.header('Authorization'),config.JWT_SECRET); 
        const userInstance = await getUserById(decoded.id)
        .catch(err => err);  
        if (userInstance instanceof Error) return res.status(404).send({name: userInstance.name, message: userInstance.message})
        res.locals.user = userInstance;  
        next();  
    }
    catch (err){
        console.error(err); 
        return res.status(403).send('Invalid Token'); 
    }
}