const Appt = require('../../../db/models').Appointments; 
/**
 * 
 * @param {Object} apptInfo key value pairs of apptInfo to make query for
 * @returns Promise<model> instance of Appointment found from query 
 */
module.exports = async apptInfo => {
    //modify to check the arrival date is like the arrival date provided by the user
    const {dog_name, last_name, breed, service, arrival_date} = apptInfo; 
    const appts = await Appt.findOne({
        where: {
            dog_name, last_name, breed, service, arrival_date
        }
    })
    .catch(err => {
        throw new Error('Error retrieving appointment'); 
    }); 
    return appts; 
}