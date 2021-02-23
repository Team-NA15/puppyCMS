const router = require('express').Router(); 

router.post('/create-account', require('./create-account')); 
router.post('/login', require('./login')); 

module.exports = router; 