const router = require('express').Router(); 
const auth = require('../../../middleware/auth'); 

// router.get('/get-todays-appointments', auth, async (req, res) => {
//     BELOW LOGIC BELONGS TO GETAPPOINTMENT.JS CONTROLLER FILE
//     let startOf = new Date().setHours(00,00,00), endOf = new Date().setHours(23,00,00);  
//     const appts = await Appt.findAll({
//         where: {
//             [Op.or]: {
//                 checked_in: true,  
//                 arrival_date: {
//                     [Op.between]: [startOf, endOf]
//                 },
//             }
//         }
//     }); 
//     const appts = await getTodaysAppointments();
//     return res.status(200).send({appts}); 
// })

router.get('/get-todays-appointments', auth, require('./get-todays-appointments')); 

module.exports = router; 