const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 
const config = require('./config/keys'); 


app.use(bodyParser.json()); 
app.use(require('./routes')); 

app.get('/', (req, res)=> {
    return res.status(200).send({data: 'we made it'}); 
})

app.listen(config.PORT, () => {
    console.log(`Server started on port ${config.PORT}`); 
})