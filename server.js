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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

module.exports = app; 