const Appt = require('../../../db/models').Appointments; 
const { Op } = require('sequelize'); 
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
                [Op.and]: {
                    checked_out: true, 
                    depart_date: {
                        [Op.between]: [startOf, endOf]
                    }
                }
            }
        }
    }); 
    return appts; 
}
async function getAppointmentHistory(dogInfo){
    const {dog_name,owner_first_name, owner_last_name,breed} =dogInfo
    
    const appts = await Appt.findAll({
        where: { 
            dog_name, owner_first_name, owner_last_name, breed
        }
    })
    .catch(err =>{
        throw new Error("Error retrieving appointment History");
    });
    return appts;
}
module.exports = {
    getOneAppointment,
    getTodaysAppointments,
    getAppointmentHistory,
}