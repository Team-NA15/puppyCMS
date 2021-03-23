const newAppt = require('../../../controllers/appointments/CRUD/newAppointment'); 
const getAppt = require('../../../controllers/appointments/CRUD/getAppointment'); 
const { findDogByOwner } = require('../../../controllers/dogs/CRUD/getDog'); 

module.exports = async (req, res) => {
    try{
        req.body.checked_in = true; 
        const [appt, dog] = await Promise.all([newAppt(req.body), 
            findDogByOwner(req.body.dog_name, req.body.owner_first_name, req.body.last_name)]); 
        dog.addAppointment(appt.id); 
        return res.status(201).send(); 
    }   
    catch(err){
        return res.status(400).send({name: err.name, message: err.message})
    }
}