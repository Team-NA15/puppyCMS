const newAppt = require('../../../controllers/appointments/CRUD/newAppointment'); 
const getAppt = require('../../../controllers/appointments/CRUD/getAppointment'); 
const {findDogByOwner} = require('../../../controllers/dogs/CRUD/getDog'); 
const Appt = require('../../../db/models').Appointments; 

module.exports = async (req, res) => {
    try{
        req.body.checked_in = true;
        req.body.checked_out = false;  
        const [[appt, created], dog] = await Promise.all([newAppt(req.body), 
            findDogByOwner(req.body.dog_name, req.body.owner_first_name, req.body.owner_last_name)]); 
        if (created === false && appt instanceof Appt) return res.status(400).send({name: 'Error', message: 'Appointment already exists', appt}); 
            dog.addAppointment(appt.id); 
        return res.status(201).send(); 
    }   
    catch(err){  
        return res.status(400).send({name: err.name, message: err.message})
    }
}