const router = require('express').Router(); 

router.use(require('./appointments')); 
router.use(require('./users'));
router.use(require('./dogs'));  

module.exports = router; 