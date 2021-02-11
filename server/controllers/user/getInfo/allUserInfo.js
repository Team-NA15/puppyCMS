const Users = require('../../../db/models').Users; 

module.exports = async id => {
    const user = await Users.findAll({
        attributes: ['id', 'first_name', 'last_name'],
        where: {
            id
        }, 
        include: [
            {
                //Organizations refers to the Organizations this user is the admin of
                association: 'Organizations', 
                attributes: ['id', 'name', 'address', 'phone_number'], 
            }, 
            {
                //MyOrgs refers to the Organizations this user is a member of
                association: 'MyOrgs',
                attributes: ['id', 'name', 'admin_id'], 
                through: {
                    attributes: []
                }, 
                include: [{
                    //OrgMembers refers to every member of each Organization this user is a member of. 
                    association: 'OrgMembers', 
                    attributes: ['id', 'email', 'first_name', 'last_name'], 
                    through: {
                        attributes: [], 
                    }, 
                }]
            }
        ]
    })
    //Need error handling here
    if (user[0] instanceof Users) return user[0];
    else return 'User not found'; 
}