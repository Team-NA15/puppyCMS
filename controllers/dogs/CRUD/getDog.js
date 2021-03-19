const Dogs = require('../../../db/models').Dogs; 

const findByDogAndOwner = async (name, owner_first_name, owner_last_name) => {
    const dog = await Dogs.findOne({
        where: {
            name, owner_first_name, owner_last_name
        }
    })
    .catch(err => {
        throw new Error('Error Searching for Dog');
    }); 
    return dog; 
}


module.exports = {
    findByDogAndOwner, 
}