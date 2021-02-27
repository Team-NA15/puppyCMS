const Dogs = require('../../db/models/index').Dogs;
const Sequelize = require('sequelize'); 
const {Op} = require('sequelize');


/**
 * Finds all possible combinations of owner names and dog names with user input and 
 * returns results of the search
 * TODO: modify to except array of any number name inputs 
 * @param {*} first  all possible names to search the database for
 * @return {*} successful ? an array of dogs found with user input, possibly none : an error 
 */
module.exports = async names => { 
    return new Promise(async(resolve, reject) => { 
        if (names.length < 3) names = [...names, ...new Array(3-names.length).fill('',0)] 
        const reducer = (accum, val, ind) => accum * (ind+1); 
        const fact = names.reduce(reducer, 1); 
        const check = await permuteAndSearch(names, fact)
        .catch(err => reject(err));
        console.log('check: ', check); 
        return resolve(check); 
    })
}

/**
 * Queries the database to find dogs by the name, owner first name
 * and owner last name provided
 * @param {*} name name of dog to search for
 * @param {*} owner_first_name first name of owner to search for
 * @param {*} owner_last_name last name of owner to search for
 * @return {*} successful ? an array of dogs found, possibly none : an promise rejected error 
 */
const search =  ([name, owner_first_name, owner_last_name]) => { 
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
 * Calculates all possible name combinations with provided input and searches for them 
 * @param {*} names an array of names provided by the user
 * @param {*} permCount the number of possible name combinations
 * @return {*} successfull ? all dogs records with possible name combinations, possibly none : a promise rejected error
 */
const permuteAndSearch = async (names, permCount) => {
    let result = [];
    let promises = [];  
    var tempSwap = 0, reverse = true, swapCount = 0, ogPos = names.length-1;
    while(swapCount < permCount){
        promises.push(search(names.slice(0,3)).then(res => {
            for(let dog of res){
                result[dog.id] = dog; 
            }
        }));
        if(tempSwap === names.length-1){
            ogPos = !reverse ? names.length-1 : 0;
            !reverse ? swap(names,0,1) : swap(names, names.length-1, names.length-2); 
            tempSwap = 0;
            swapCount++;  
            reverse = !reverse;
            promises.push(search(names.slice(0,3)).then(res => {
                for (let dog of res){
                    result[dog.id] = dog; 
                }
            }));  
        }
        if (reverse){
            swap(names, ogPos, ogPos - 1); 
            ogPos--;   
        }
        else{
            swap(names, ogPos, ogPos +1); 
            ogPos++;  
        }
        tempSwap++; 
        swapCount++;
    }
    await Promise.all(promises)
    .catch(err => Promise.reject(err)); 
    return Object.values(result);
}

const swap = (arr, x, y) => {
    const temp = arr[x]; 
    arr[x] = arr[y]; 
    arr[y] = temp; 
}
