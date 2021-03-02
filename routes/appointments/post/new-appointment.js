const newAppointment = require('../../../controllers/appointments/CRUD/newAppointment'); 

module.exports = async (req, res) => {
    const apptData = {
        dog_name: req.body.name, 
        last_name: req.body.last_name, 
        breed: req.body.service,
        service: req.body.service, 
        arrival_date: req.body.arrival_date, 
        depart_date: req.body.depart_date || null, 
        new_dog: req.body.new_dog || false
    }
    const newAppt = await newAppointment(apptData)
    .catch(err => res.status(404).send({error: 'Error creating appointment', name: err.name, message: err.message})); 
    return res.status(200).send({newAppt}); 
}