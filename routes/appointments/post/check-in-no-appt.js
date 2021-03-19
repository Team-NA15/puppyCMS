const newAppointment = require("../../../controllers/appointments/CRUD/newAppointment");
const { findByDogAndOwner } = require('../../../controllers/dogs/CRUD/getDog'); 

module.exports = async (req, res) => {
    let appt; 
    try{
        appt = await newAppointment(req.body); 
        if(appt instanceof Error) return res.status(400).send({name: 'Error', message: 'Error creating appointment'}); 
        res.status(201).send(); 
        const dog = await findByDogAndOwner(req.body.dog_name, req.body.owner_first_name, req.body.last_name); 
        dog.addAppointment(appt.id); 
    }
    catch(err){
        return res.status(400).send({name: err.name, message: err.message}); 
    }
}