const Users = require('../../../db/models').Users; 
const {createAccount} = require('../../../controllers/user/CRUD/createAccount'); 
/**
 * Request Enpoint for User Account Creation
 * @param {*} req 
 * @param {*} res 
 */
module.exports = async (req,res) => {
    //below is an example of what creating a user will look like, will be replaced in later iteration
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
    .catch(err => res.status(404).send({name: err.name, message:err.message}));
    if (!(newUser instanceof Users)) return res.status(404).send({error: 'User not created, may already exist'});
    else return res.status(200).send(); 
}