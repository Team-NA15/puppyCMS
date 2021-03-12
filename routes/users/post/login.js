const {comparePasswords, newAccessToken} = require('../../../controllers/user/login'); 
/**
 * Request endpoint for a User to login. Validates the users password and email address from the database. 
 * @param {*} req 
 * @param {*} res 
 * @return {string} successful? an access token for authorization : error message
 */
module.exports = async (req,res) => {
    if(!req.body.email || !req.body.password) return res.status(400).send({name: 'Error', message: 'Missing required fields'})
    const reqUser = {
        email: req.body.email, 
        password: req.body.password,
    }  
    const [error, user] = await comparePasswords(reqUser)
    .catch(err => err)
    if (error) return res.status(400).send({name: error.name, message: error.message}); 
    else {
        const accessToken = await newAccessToken(user)
        .catch(err => res.status(404).send({name: err.name, message: err.message}));  
        console.log('access token: ', accessToken); 
        if (!accessToken) return res.status(404).send({name: 'Error', message: 'Error logging in'}); 
        else res.status(200).send({access_token: accessToken}); 
    }
}