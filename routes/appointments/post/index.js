const router = require('express').Router();
const auth = require('../../../middleware/auth');  
const isNewDogAppt = require('../../../middleware/newDogAppt'); 

router.post('/new-appointment', auth, isNewDogAppt, require('./new-appointment')); 


module.exports = router; 