const Appt = require('../../../db/models').Appointments; 

/**
 * Saves a new appointment to the database given the dogs information 
 * @param {Object} dogInfo 
 * @return Promise<model> the Appointment instance created
 */
module.exports = async dogInfo => {
    const appt = await Appt.create(dogInfo)
    .catch(err => {
        console.log(err); 
        throw new Error('Error creating appointment'); 
    });  
    return appt;  
}