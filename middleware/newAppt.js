const Dogs = require('../db/models').Dogs; 

module.exports = async (req, res, next) => {
    //map the request body to make sure we have all the correct values in the request body
    res.locals.dog = dogApptMapper(req.body);
    let dog;  
    try{
        dog = await Dogs.findOne({
            where: {
                name: res.locals.dog_name, 
                owner_last_name: res.locals.dog.last_name
            }
        }); 
    }
    catch(err){
        return res.status(400).send({name: err.name, message: 'Error searching for dog'}); 
    }
    if (dog instanceof Dogs){
        res.locals.dog.dog_id = dog.id; 
        res.locals.dog.dog_name = dog.name; 
        res.locals.dog.last_name = dog.owner_last_name; 
        res.locals.dog.breed = dog.breed; 
        res.locals.dog.new_dog = false; 
    }  
    else res.locals.dog.new_dog = true; 
    next();  
}

const dogApptMapper = (dog) => {
    return {
        dog_name: dog.dog_name, 
        last_name: dog.last_name, 
        breed: dog.breed, 
        service: dog.service,
        arrival_date: dog.arrival_date, 
        depart_date: dog.depart_date || null
    }
}