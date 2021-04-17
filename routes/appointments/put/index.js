const router = require('express').Router(); 
const auth = require('../../../middleware/auth');  

router.put('/check-in-appointment', auth, require('./check-in-appt')); 
router.put('/appointment', auth, require('./update-appointment')); 

module.exports = router; 