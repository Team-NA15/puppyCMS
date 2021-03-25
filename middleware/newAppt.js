const Dogs = require('../db/models').Dogs; 
const { findDogByOwner } = require('../controllers/dogs/CRUD/getDog'); 

module.exports = async (req, res, next) => {
    let dog, apptData;  
    try{
        //map the request body to make sure we have all the correct values in the request body
        apptData = dogApptMapper(req.body);
        dog = await findDogByOwner(apptData.dog_name, apptData.owner_first_name, 
            apptData.last_name)
    }
    catch(err){
        return res.status(400).send({name: err.name, message: 'Error searching for dog'}); 
    }
    if (dog instanceof Dogs){
        apptData.dog_id = dog.id; 
        apptData.dog_name = dog.name; 
        apptData.last_name = dog.owner_last_name; 
        apptData.breed = dog.breed; 
        apptData.new_dog = false; 
    }  
    else apptData.new_dog = true;
    res.locals.dog = apptData;  
    next();  
}

const dogApptMapper = (dog) => {
    return {
        dog_name: dog.dog_name,
        owner_first_name: dog.owner_first_name, 
        last_name: dog.owner_last_name, 
        breed: dog.breed, 
        service: dog.service,
        arrival_date: dog.arrival_date, 
        depart_date: dog.depart_date || null
    }
}