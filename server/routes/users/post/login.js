const {comparePasswords, newAccessToken} = require('../../../controllers/user/login'); 
module.exports = async (req,res) => {
    const reqUser = {
        email: req.body.email, 
        password: req.body.password,
    }  
    const [err, user] = await comparePasswords(reqUser); 
    if (err) res.status(400).send({error: err}); 
    else {
        const accessToken = await newAccessToken(user); 
        
        if (!accessToken) {
            res.status(404).send({error: 'Error logging in'}); 
        } 
        else res.status(200).send({data: {accessToken}}); 
    }
}