const { getAppointmentHistory } = require('../../../controllers/appointments/CRUD/getAppointment'); 

module.exports = async function(req, res){
    try{
        const dogInfo = {
            dog_name: req.query.dog_name.trim(),
            owner_first_name : req.query.owner_first_name.trim(),
            owner_last_name : req.query.owner_last_name.trim(),
            breed: req.query.breed.trim()
        }
        const appointmentHistory = await getAppointmentHistory(dogInfo); 
        return res.status(200).send({appointmentHistory});
    }
    catch(err){
        return res.status(400).send({
            name: err.name, 
            message: err.message
        })
    }
}