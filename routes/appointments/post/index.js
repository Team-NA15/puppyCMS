const router = require('express').Router();
const auth = require('../../../middleware/auth');  

router.post('/new-appointment', auth, require('./new-appointment')); 


module.exports = router; 