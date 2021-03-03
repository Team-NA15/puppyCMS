const Dogs = require('../../db/models/index').Dogs;
const Sequelize = require('sequelize'); 
const {Op} = require('sequelize');


/**
 * Finds all possible combinations of owner names and dog names with user input and 
 * returns results of the search
 * TODO: modify to except array of any number name inputs 
 * @param {array} first  all possible names to search the database for
 * @return {array} successful ? an array of dogs found with user input, possibly none : an error 
 */
module.exports = async names => { 
    return new Promise(async(resolve, reject) => { 
        if (names.length < 3) names = [...names, ...new Array(3-names.length).fill('',0)]  
        const check = await permuteAndSearch(names, names.length)
        .catch(err => reject(err));
        return resolve(check); 
    })
}

/**
 * Queries the database to find dogs by the name, owner first name
 * and owner last name provided
 * @param {string} name name of dog to search for
 * @param {string} owner_first_name first name of owner to search for
 * @param {string} owner_last_name last name of owner to search for
 * @return {array} successful ? an array of dogs found, possibly none : an promise rejected error 
 */
const search = ([name, owner_first_name, owner_last_name]) => { 
    return new Promise(async (resolve, reject) => {
        const foundDogs = await Dogs.findAll({
            where: {
                [Op.and]: [
                    Sequelize.where(Sequelize.fn('lower', Sequelize.col('name')),{
                        [Op.like]: `%${name}%`
                    }), 
                    Sequelize.where(Sequelize.fn('lower', Sequelize.col('owner_first_name')),{
                        [Op.like]: `%${owner_first_name}%`
                    }),
                    Sequelize.where(Sequelize.fn('lower', Sequelize.col('owner_last_name')),{
                        [Op.like]: `%${owner_last_name}%`
                    }),
                ]
            }
        })
        .catch(err => {
            console.error(err); 
            return reject(err); 
        });  
        return resolve(foundDogs); 
    }); 
}

/**
 * Swaps array elements provided their position 
 * @param {array} arr array of elements to be modified 
 * @param {number} x position of first element
 * @param {number} y position of second element
 */
const swap = (arr, x, y) => {
    const temp = arr[x]; 
    arr[x] = arr[y]; 
    arr[y] = temp; 
}

const permuteAndSearch = async (names, permCount) => {
    let result = {}; 
    let promises = []; 
    /**
    * A recursive function using heaps algorithm to find all permutations of a given array of names
    * @param {array} names array of names to find permutations for
    * @param {number} size size of the array
    * @return  
    */
    const heapPermute = async (names, size) => {
        for(let i = 0; i < size; i++){
            if (size === 1) {
                console.log(names); 
                promises.push(search(names.slice(0,3)).then(
                res => {
                    for(let dog of res) result[dog.id] = dog; 
                }
            ));
            } 
            heapPermute(names, size-1); 
            if (size % 2 == 1) swap(names, 0, size-1); 
            else if (size % 2 === 0) swap(names, i, size-1);
        }   
    }
    heapPermute(names, names.length); 
    await Promise.all(promises)
    .catch(err => Promise.reject(err));
    return Object.values(result);  
}

