let users = require("../models/userModel")
exports.getusers =()=>
{
    return users;
}
exports.adduser=(u)=>
{
    users.push(u)    
}