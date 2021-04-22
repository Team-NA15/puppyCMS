const saveDog = require('../../../controllers/dogs/CRUD/saveDog'); 

module.exports = async function (req, res){
    if (req.body.name === undefined || req.body.owner_first_name === undefined || req.body.owner_last_name === undefined) {
        return res.status(400).send({name: 'Error', message: 'Missing fields'}); 
    }
    try{
        const dog = await saveDog(req.body);  
    }
    catch(err){
        return res.status(400).send({name: err.name, message: err.message}); 
    }
}
