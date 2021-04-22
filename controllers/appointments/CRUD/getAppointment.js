const Appt = require('../../../db/models').Appointments; 
/**
 * 
 * @param {Object} apptInfo key value pairs of apptInfo to make query for
 * @returns Promise<model> instance of Appointment found from query 
 */
async function getOneAppointment(apptInfo){
    //modify to check the arrival date is like the arrival date provided by the user
    const {dog_name, owner_last_name, breed, service, arrival_date} = apptInfo; 
    const appt = await Appt.findOne({
        where: {
            dog_name, owner_last_name, breed, service, arrival_date
        }
    })
    .catch(err => { 
        throw new Error('Error retrieving appointment'); 
    }); 
    return appt; 
}


async function getTodaysAppointments(){
    let startOf = new Date().setHours(00,00,00), endOf = new Date().setHours(23,00,00);  
    const appts = await Appt.findAll({
        where: {
            [Op.or]: {
                checked_in: true,  
                arrival_date: {
                    [Op.between]: [startOf, endOf]
                },
            }
        }
    }); 
    return appts; 
}

module.exports = {
    getOneAppointment,
    getTodaysAppointments,
}