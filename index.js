const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 
const config = require('./config/keys'); 
const path = require('path'); 
const cors = require('cors'); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false})); 
app.use(cors());  

app.use(express.static(path.join(__dirname,'client/build'))); 
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(require('./routes'));

app.listen(config.PORT, () => {
    console.log(`Server started on port ${config.PORT}`); 
}); 

module.exports = app; 