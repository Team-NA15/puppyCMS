const Dogs = require('../../../db/models').Dogs; 

module.exports = async dogInfo => {
    const dog = await Dogs.create(dogInfo)
    .catch(err => {
        throw new Error('Error Creating Dog'); 
    })
}