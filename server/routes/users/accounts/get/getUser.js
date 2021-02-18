const getAllUserInfo = require('../../../../controllers/user/getInfo/allUserInfo'); 


//Get all the user information
module.exports = async (req, res) => {
    //const userInfo = await getAllUserInfo(place user id here after middleware); 
    //likely need redirect here, if couldn't get user info, there's an issue with the token meaning may not be logged in 
    //if (!userInfo) return res.status(400).send(); 
    //else res.status(200).send(userInfo); 
    const userInfo = await getAllUserInfo("402e9768-eea2-4f3a-befc-01b60e162b3b"); 
    res.send(userInfo); 
}