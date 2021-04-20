const router = require('express').Router(); 
const auth = require('../../../middleware/auth');  

router.put('/check-in-appointment', auth, require('./check-in-appt')); 
router.put('/check-out-appointment', auth, require('./check-out-appt')); 

module.exports = router; 