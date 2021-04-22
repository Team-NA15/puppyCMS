const router = require('express').Router(); 
const auth = require('../../../middleware/auth'); 


router.get('/search-dogs', auth, require('./search-dogs')); 

module.exports = router; 