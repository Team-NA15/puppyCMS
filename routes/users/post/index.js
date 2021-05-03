const router = require('express').Router(); 
const auth = require('../../../middleware/auth'); 

router.post('/create-account', auth, require('./create-account')); 
router.post('/login', require('./login')); 

module.exports = router; 