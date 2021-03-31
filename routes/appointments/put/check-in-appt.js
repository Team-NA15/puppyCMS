const { findDogByOwner } = require('../../../controllers/dogs/CRUD/getDog'); 
const updateAppt = require('../../../controllers/appointments/CRUD/updateAppointment');
const getAppt = require('../../../controllers/appointments/CRUD/getAppointment'); 
const Moment = require('moment');  

module.exports = async (req, res) => {  
    let appt, dog, updated; 
    try{
        req.body.arrival_date = new Date(req.body.arrival_date); 
        appt = await getAppt(req.body); 
        if (appt.checked_in === true) return res.status(400).send({name: 'Error', message: 'Dog is already checked in'}); 
        req.body.checked_in = true;  
        if (appt.dog_id === undefined || appt.dog_id === null) {
            dog = await findDogByOwner(req.body.dog_name, req.body.owner_first_name, req.body.owner_last_name); 
            dog.addAppointment(appt); 
            updated = await updateAppt(appt, req.body); 
        }
        else{   
            updated = await updateAppt(appt, req.body); 
        }
        return res.status(200).send({updated}); 
    }
    catch(error) {
        return res.status(400).send({name: error.name, message: error.message}); 
    }

}