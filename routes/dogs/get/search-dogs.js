const searchDogs = require('../../../controllers/dogs/searchDogs'); 

module.exports = async (req, res) => {
    if (!req.body.query) return res.status(400).send({name: 'Error', message: 'Missing query'})
    const names = req.body.query.split(' '); 
    try{
        const dogs = await searchDogs(names)
        return res.status(200).send({data: {dogs}});
    }
    catch(err){
        return res.status(400).send({name: err.name, message: err.message}); 
    } 
}