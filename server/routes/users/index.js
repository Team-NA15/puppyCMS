const router = require('express').Router(); ; 

router.use(require('./accounts')); 
// router.use(require('./auth')); 

module.exports = router; 