const newAppointment = require('../../../controllers/appointments/CRUD/newAppointment'); 
const Appt = require('../../../db/models').Appointments;
const { findDogByOwner } = require('../../../controllers/dogs/CRUD/getDog');  

module.exports = async (req, res) => {
    let appt, created, dog; 
    try{ 
        req.body.arrival_date = new Date(req.body.arrival_date); 
        if(req.query.newDog == 'true'){
            req.body.new_dog = true;
            [appt, created] = await newAppointment(req.body);  
            if (created === false && appt instanceof Appt) return res.status(400).send({name: 'Error', message: 'Appointment already exists', appt});  
            return res.status(201).send(); 
        }
        else{
            req.body.new_dog = false; 
            dog = await findDogByOwner(req.body.dog_name, req.body.owner_first_name, req.body.owner_last_name); 
            if (!dog) return res.status(400).send({name: 'Error', message: 'Error finding dog for appointment, is this dog new?'}); 
            [appt, created] = await newAppointment(req.body); 
            if (created === false && appt instanceof Appt) return res.status(400).send({name: 'Error', message: 'Appointment already exists', appt});  
            dog.addAppointment(appt.id);  
            return res.status(201).send();
        }
    }
    catch(err){
        return res.status(400).send({name: err.name, message: err.message}); 
    }
}


 


