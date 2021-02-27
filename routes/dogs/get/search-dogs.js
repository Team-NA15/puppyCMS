const searchDogs = require('../../../controllers/dogs/searchDogs'); 

module.exports = async (req, res) => {
    const start = new Date().getMilliseconds(); 
    const names = req.body.query.split(' '); 
    const dogs = await searchDogs(names)
    .catch(err => res.status(400).send({error: 'an error occurred'})); 
    const end = new Date().getMilliseconds() - start; 
    console.log('exec time: ', end);  
    return res.status(200).send({data: {dogs}}); 
}