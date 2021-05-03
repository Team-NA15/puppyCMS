const { getOneAppointment } = require('../../../controllers/appointments/CRUD/getAppointment'); 
const updateAppt = require('../../../controllers/appointments/CRUD/updateAppointment'); 

module.exports = async (req, res) => {
    try{
        const appt = await getOneAppointment(req.body.prevAppt);  
        if (!appt) return res.status(400).send({name: 'Error', message: 'Error finding appointment'}); 
        const updated = await updateAppt(appt, req.body.updates); 
        if (!updated) return res.status(400).send({name: 'Error', message: 'Error updating appointment'}); 
        return res.status(200).send({updateAppointment: updated}); 
    }
    catch(error){
        return res.status(400).send({name: error.name, message: error.message}); 
    }
}