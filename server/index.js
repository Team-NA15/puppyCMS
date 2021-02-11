const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 
const config = require('./config/keys'); 

console.log('test'); 

app.use(bodyParser.json()); 
app.use(require('./routes')); 

app.listen(config.PORT, () => {
    console.log(`Server started on port ${config.PORT}`); 
})