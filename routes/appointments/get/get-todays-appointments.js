const { getTodaysAppointments } = require('../../../controllers/appointments/CRUD/getAppointment'); 

module.exports = async function (req, res){
    const appts = await getTodaysAppointments();
    if (!appts) return res.status(400).send({name: 'Error', message: 'Error retrieving todays appointments'}); 
    console.log(appts); 
    return res.status(200).send({appts});

}