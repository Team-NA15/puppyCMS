const Users = require('../../../db/models').Users; 
const {createAccount} = require('../../../controllers/user/CRUD/createAccount'); 

module.exports = async (req,res) => {
    //below is an example of what creating a user will look like, will be replaced in later iteration
    const user = {
        where: {
            email: 'donjuan@gmail.com'
        }, 
        defaults: {
            password: 'password', 
            first_name: 'Don', 
            last_name: 'Henley', 
            address: 'New York', 
            phone_number: '958-222-4938', 
            role: 2, 
        }
    }
    const newUser = await createAccount(user)
    .catch(err => res.status(404).send({name: err.name, message:err.message}));
    if (!(newUser instanceof Users)) return res.status(404).send({error: 'User not created, may already exist'});
    else return res.status(200).send(); 
}