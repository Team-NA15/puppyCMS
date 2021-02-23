const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 
const config = require('./config/keys'); 


app.use(bodyParser.json()); 
app.use(require('./routes')); 

app.use(express.static(path.join(__dirname, 'client/build'))); 


app.listen(config.PORT, () => {
    console.log(`Server started on port ${config.PORT}`); 
})