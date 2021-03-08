const newAppointment = require('../../../controllers/appointments/CRUD/newAppointment'); 
const Appt = require('../../../db/models').Appt; 

module.exports = async (req, res) => {
    const apptData = {
        dog_name: req.body.dog_name, 
        last_name: req.body.last_name, 
        breed: req.body.service,
        service: req.body.service, 
        arrival_date: req.body.arrival_date, 
        depart_date: req.body.depart_date || null, 
        new_dog: req.body.new_dog || false
    }
    const appt = await newAppointment(apptData)
    if (appt instanceof Error) return res.status(400).send({name: appt.name, message: appt.message}); 
    else return res.status(201).send(); 
}