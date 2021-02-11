const router = require('express').Router(); 

router.get('/user/init-user', require('./getUser')); 

module.exports = router; 