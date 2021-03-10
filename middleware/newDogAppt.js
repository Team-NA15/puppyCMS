const Dogs = require('../db/models').Dogs; 

module.exports = async (req, res, next) => {
    const dog = await Dogs.findOne({
        where: {
            name: req.body.dog_name, 
            owner_last_name: req.body.last_name
        }
    });
    if (dog instanceof Dogs) res.locals.dog = dogApptMapper(dog, req.body); 
    else req.body.new_dog = true; 
    next();  
}

const dogApptMapper = (dog, apptData) => {
    return {
        dog_id: dog.id,
        dog_name: dog.name, 
        last_name: dog.owner_last_name, 
        breed: dog.breed, 
        service: apptData.service,
        arrival_date: apptData.arrival_date, 
        depart_date: apptData.depart_date || null
    }
}