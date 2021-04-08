const router = require('express').Router(); 
const auth = require('../../../middleware/auth');  

router.put('/check-in-appointment', auth, require('./check-in-appt')); 

module.exports = router; 