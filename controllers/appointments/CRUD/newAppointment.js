const Appt = require('../../../db/models').Appointments; 

/**
 * 
 * @param {Object} data 
 */
module.exports = async data => {
    const appt = await Appt.create(data)
    .catch(err => err);  
    return appt;  
}