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
        .catch(err => res.status(404).send({error: 'error retrieving user', name: err.name, message: err.message}));  
        res.locals.user = userInstance;  
        next();  
    }
    catch (err){
        console.log(err); 
        return res.status(403).send('Invalid Token'); 
    }
}