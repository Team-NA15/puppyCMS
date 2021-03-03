const router = require('express').Router(); 

// router.use(require('organizations')); 
router.use(require('./users'));
router.use(require('./dogs'));  

module.exports = router; 