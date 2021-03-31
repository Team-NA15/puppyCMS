const Appt = require('../../../db/models').Appointments; 

/**
 * Saves a new appointment to the database given the dogs information 
 * @param {Object} dogInfo 
 * @return Promise<model> the Appointment instance created
 */
module.exports = async dogInfo => {
    // const appt = await Appt.create(dogInfo)
    // .catch(err => {
    //     console.log(err); 
    //     throw new Error('Error creating appointment'); 
    // });  
    // return appt;  
    const {dog_name, owner_last_name, service, breed, arrival_date} = dogInfo; 
    const [appt, created] = await Appt.findOrCreate({
        where: {
            dog_name, owner_last_name, service, breed, arrival_date 
        }, 
        defaults: {
            depart_date: dogInfo.depart_date || null
        }
    })
    .catch(error => {
        console.log(error); 
        throw new Error('Error creating appointment'); 
    }); 
    return [appt, created];  
}