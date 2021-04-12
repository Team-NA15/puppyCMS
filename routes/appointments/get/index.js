const router = require('express').Router(); 
const auth = require('../../../middleware/auth'); 
const Appt = require('../../../db/models').Appointments;  

router.get('/get-todays-appointments', auth, async (req, res) => {
    const appts = await Appt.findAll(); 
    return res.status(200).send({appts}); 
})

module.exports = router; 