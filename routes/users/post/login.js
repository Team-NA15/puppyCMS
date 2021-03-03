const {comparePasswords, newAccessToken} = require('../../../controllers/user/login'); 
/**
 * Request endpoint for a User to login. Validates the users password and email address from the database. 
 * @param {*} req 
 * @param {*} res 
 * @return {string} successful? an access token for authorization : error message
 */
module.exports = async (req,res) => {
    const reqUser = {
        email: req.body.email, 
        password: req.body.password,
    }  
    const [error, user] = await comparePasswords(reqUser)
    .catch(err => res.status({error: err.message, name: err.name}))
    if (error) return res.status(400).send({error}); 
    else {
        const accessToken = await newAccessToken(user)
        .catch(err => res.status(404).send({error: err.message, name: err.name}));  
        if (!accessToken) return res.status(404).send({error: 'Error logging in, this may be our fault'}); 
        else res.status(200).send({data: {accessToken}}); 
    }
}