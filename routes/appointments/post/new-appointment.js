const newAppointment = require('../../../controllers/appointments/CRUD/newAppointment'); 
const Appt = require('../../../db/models').Appointments; 

module.exports = async (req, res) => {
    let appt; 
    try{
        if (res.locals.dog) appt = await newAppointment(res.locals.dog);
        else appt = await newAppointment(req.body);  
        
        if (appt instanceof Error) return res.status(400).send({name: appt.name, message: appt.message}); 
        else return res.status(201).send();
    }
    catch(err){
        return res.status(400).send({name: err.name, message: err.message}); 
    } 
}
