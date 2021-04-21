const router = require('express').Router(); 
const auth = require('../../../middleware/auth'); 
const Appt = require('../../../db/models').Appointments; 
const { Op } = require('sequelize');  

router.get('/get-todays-appointments', auth, async (req, res) => {
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
    return res.status(200).send({appts}); 
})

module.exports = router; 