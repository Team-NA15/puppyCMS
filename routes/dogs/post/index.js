const router = require('express').Router(); 
const auth = require('../../../middleware/auth'); 

router.post('/new-dogs', auth, require('./new-dog'));
module.exports = router; 