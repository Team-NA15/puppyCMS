/**
 * 
 * @param {Appointment} appt the instance of the appointment to be updated
 * @param {Object} updates the updates to be made to the instance
 * @returns Promise<model> instance of model that was updated
 */
module.exports = async (appt, updates) => {
    const updated = await appt.update(updates)
    .catch(err => {
        throw new Error('Error updating appointment'); 
    }) 
    return updated; 
}