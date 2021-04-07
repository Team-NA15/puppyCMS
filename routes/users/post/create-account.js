const Users = require('../../../db/models').Users; 
const {createAccount} = require('../../../controllers/user/CRUD/createAccount'); 
/**
 * Request Enpoint for User Account Creation
 * @param {*} req 
 * @param {*} res 
 */
module.exports = async (req,res) => {
    if (!req.body.email || !req.body.password || !req.body.first_name || !req.body.last_name || !req.body.address || !req.body.phone_number || !req.body.role){
        let error = new Error('Missing required values for account creation'); 
        return res.status(400).send({error})
    }
    if (req.body.role === 1) return res.status(404).send({error: 'Not allowed to create super users'}); 
    const user = {
        where: {
            email: req.body.email
        }, 
        defaults: {
            password: req.body.password, 
            first_name: req.body.first_name, 
            last_name: req.body.last_name, 
            address: req.body.address, 
            phone_number: req.body.phone_number, 
            role: req.body.role, 
        }
    }
    const newUser = await createAccount(user)
    .catch(error => res.status(500).send({error}));
    if (!(newUser instanceof Users)) {
        const error = new Error('User not created, may already exist'); 
        return res.status(400).send(error); 
    }
    else return res.status(201).send(); 
}