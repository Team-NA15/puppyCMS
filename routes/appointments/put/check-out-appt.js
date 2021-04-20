const updateAppointment = require('../../../controllers/appointments/CRUD/updateAppointment');
const {getOneAppointment} = require('../../../controllers/appointments/CRUD/getAppointment');

module.exports = async(req,res) => {
    try{
        const appt = await getOneAppointment(req.body)
        if(appt === null) return res.status(400).send({name: "Error", message: "Appointment Not found"})
        const updates = {checked_in: false, checked_out:true}
        const updated = await updateAppointment(appt, updates)
        
        return res.status(200).send({updated})


    }
    catch(error){
        return res.status(400).send({name:error.name, message:error.message})

    }
}



