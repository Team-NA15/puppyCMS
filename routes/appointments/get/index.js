const router = require('express').Router(); 
const auth = require('../../../middleware/auth'); 

router.get('/get-appointment-history', auth, require('./get-appointment-history'));

router.get('/get-todays-appointments', auth, require('./get-todays-appointments')); 

module.exports = router; 