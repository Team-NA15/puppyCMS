const updateAppointment = require('../../../controllers/appointments/CRUD/updateAppointment');
const {getOneAppointment} = require('../../../controllers/appointments/CRUD/getAppointment');

module.exports = async(req,res) => {
    try{
        const appt = await getOneAppointment(req.body)
        if(appt === null) return res.status(400).send({name: "Error", message: "Appointment Not found"}) 
        const updates = {checked_in: false, checked_out:true} 
        const newDepart = new Date(Date.now());  
        if (newDepart.toLocaleDateString() != new Date(appt.depart_date).toLocaleDateString()) updates.depart_date = newDepart
        console.log(updates);   
        const updated = await updateAppointment(appt, updates)
        return res.status(200).send({updated})
    }
    catch(error){
        return res.status(400).send({name:error.name, message:error.message})

    }
}



