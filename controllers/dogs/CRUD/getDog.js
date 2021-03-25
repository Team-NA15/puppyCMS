const Dogs = require('../../../db/models').Dogs; 

const findDogByOwner = async (name, owner_first_name, owner_last_name) => {
    const dog = await Dogs.findOne({
        where: {
            name, owner_first_name, owner_last_name 
        }
    })
    .catch(err => {  
        throw new Error('Error Retrieving Dog'); 
    }); 
    return dog; 
}

module.exports = {
    findDogByOwner,
}