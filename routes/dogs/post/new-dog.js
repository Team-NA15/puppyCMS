const newdog = require('../../../controllers/dogs/CRUD/newDog');
//const Dogs = require('../../../db/models').dog; 
module.exports = 
    async (req, res) => {
        // const dogData = {
        //     name: req.body.name, 
        //     owner_first_name: req.body.owner_first_name,
        //     owner_last_name: req.body.owner_last_name, 
        //     address: req.body.address,
        //     city: req.body.city,
        //     state:req.body.state,
        //     zip:req.body.zip,
        //     breed: req.body.service,
        //     gender: req.body.gender, 
        //     weight: req.body.weight, 
        //     age: req.body.age || null, 
        //     neutered_spayed: req.body.neutered_spayed,
        //     created_at: req.body.created_at,
        //     update_at:req.body.update_at,
        //     new_dog: req.body.new_dog || false
        // }
        try{
            const dog = await newdog(req.body); 
            return res.status(201).send()
        }
        catch(err){
            return res.status(400).send({name: err.name, message: err.message})
        }
        
        
    }

