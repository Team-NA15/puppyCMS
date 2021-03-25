const newAppointment = require('../../../controllers/appointments/CRUD/newAppointment'); 
const Appt = require('../../../db/models').Appointments;
const { findDogByOwner } = require('../../../controllers/dogs/CRUD/getDog');  

module.exports = async (req, res) => {
    let appt, dog; 
    try{
        if(req.query.newDog == 'true'){
            req.body.new_dog = true; 
            appt = await newAppointment(req.body); 
            return res.status(201).send(); 
        }
        else{
            req.body.new_dog = false; 
            [dog, appt] = await Promise.all([findDogByOwner(req.body.dog_name, req.body.owner_first_name, req.body.owner_last_name),
                newAppointment(req.body)]); 
            dog.addAppointment(appt.id);  
            return res.status(201).send();
        }
    }
    catch(err){
        return res.status(400).send({name: err.name, message: err.message}); 
    }
}


 


