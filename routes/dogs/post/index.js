const router = require('express').Router(); 
const auth = require('../../../middleware/auth'); 

router.post('/check-in-no-appointment', auth, require('./check-in-no-appt')); 

module.exports = router; 