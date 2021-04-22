const searchDogs = require('../../../controllers/dogs/searchDogs'); 

module.exports = async (req, res) => { 
    if (!req.query.search) return res.status(400).send({name: 'Error', message: 'Missing query'})
    const names = req.query.search.split(' '); 
    try{
        const dogs = await searchDogs(names)
        console.log('names: ', names);
        console.log('dogs: ', dogs);  
        return res.status(200).send({dogs});
    }
    catch(err){
        return res.status(400).send({name: err.name, message: err.message}); 
    } 
}