const router = require('express').Router();
const auth = require('../../../middleware/auth');  
const newAppt = require('../../../middleware/newAppt'); 

router.post('/new-appointment', auth, newAppt, require('./new-appointment')); 
router.post('/check-in-no-appointment', auth, require('./check-in-no-appt')); 

module.exports = router; 