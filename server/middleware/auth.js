const jwt = require('jsonwebtoken'); 
const config = require('../../config/keys');
const {getUserById} = require('../../controllers/user/getUser');  

module.exports = async(req,res,next) => {
    try{
        const decoded = jwt.verify(req.header('Authorization'),config.JWT_SECRET); 
        const userInstance = await getUserById(decoded.id);  
        res.locals.user = userInstance;  
        next();  
    }
    catch (err){
        console.log(err); 
        return res.status(403).send('Invalid Token'); 
    }
}