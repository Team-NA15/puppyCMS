const router = require('express').Router();
const auth = require('../../../middleware/auth');  

router.post('/new-appointment', auth, require('./new-appointment')); 
router.post('/check-in-no-appointment', auth, require('./check-in-no-appt')); 
 
module.exports = router; 