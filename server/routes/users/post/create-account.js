const Users = require('../../../db/models').Users; 


module.exports = async (req,res) => {
    //below is an example of what creating a user will look like, will be replaced in later iteration
    const user = {
        where: {
            email: 'johnwick@gmail.com'
        }, 
        defaults: {
            password: 'password', 
            first_name: 'john', 
            last_name: 'wick', 
            address: 'New York', 
            phone_number: '958-222-4938', 
            role: 2, 
        }
    }
    const [newUser, created] = await Users.findOrCreate(user); 
    console.log(newUser); 
    if (!created) return res.send('user not created');  
    else return res.send(newUser);  
}