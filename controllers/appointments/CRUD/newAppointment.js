const Appt = require('../../../db/models').Appointments; 

/**
 * Saves a new appointment to the database given the dogs information 
 * @param {Object} dogInfo 
 * @return Promise<[model,boolean]> the Appointment instance created or retrieved and boolean if it was created 
 */
module.exports = async dogInfo => { 
    const {dog_name, owner_first_name, owner_last_name, service, breed, arrival_date} = dogInfo; 
    const [appt, created] = await Appt.findOrCreate({
        where: {
            dog_name, owner_last_name, service, breed, arrival_date 
        }, 
        defaults: {
            owner_first_name, 
            depart_date: dogInfo.depart_date || null, 
            special_instructions: dogInfo.special_instructions || '', 
            new_dog: dogInfo.new_dog
        }
    })
    .catch(error => {
        console.log(error); 
        throw new Error('Error creating appointment'); 
    }); 
    return [appt, created];  
}