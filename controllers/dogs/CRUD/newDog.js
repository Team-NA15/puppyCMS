const Dogs = require('../../../db/models').Dogs; 

module.exports = async dogInfo => {
    const dog = await Dogs.create(dogInfo)
    .catch(err => {
        console.log(err); 
        throw new Error('Create dog error'); 
    })
    return dog; 
}