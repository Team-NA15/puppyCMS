const router = require('express').Router(); 

// router.use(require('organizations')); 
router.use(require('./users')); 

module.exports = router; 