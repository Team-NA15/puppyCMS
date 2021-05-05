const { getAppointmentHistory } = require('../../../controllers/appointments/CRUD/getAppointment'); 

module.exports = async function(req, res){
    const dogInfo={
        dog_name: req.query.dog_name,
        owner_first_name : req.query.owner_first_name,
        owner_last_name : req.query.owner_last_name,
        breed: req.query.breed
    }
    const appointmentHistory = await getAppointmentHistory(dogInfo);
    return res.status(200).send({appointmentHistory});



}