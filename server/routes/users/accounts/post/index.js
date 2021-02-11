const router = require('express').Router(); 

router.post('/user/init', require('./createAccount')); 

module.exports = router; 