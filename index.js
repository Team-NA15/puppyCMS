const app = require('./server'); 
const config = require('./config/keys'); 

app.listen(config.PORT, () => {
    console.log(`Server started on port ${config.PORT}`); 
}); 


