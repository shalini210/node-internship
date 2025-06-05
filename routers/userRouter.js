const express = require("express")
const router  = express.Router();
const userController = require("../controllers/userController")
router.get("/",(req,res)=>
{
  let users=  userController.getusers()
  res.send(users)
})
// http://localhost:8080/user/john
router.get("/:name",(req,res)=>
{
  let n = req.params.name;
  res.send(n)
})
http://localhost:8080/user/getuserbyid/28397498
// router.get("/getuserbyid/:id")

router.post("/",(req,res)=>
{
    let user = {id:req.body.id,name:req.body.name,
      contact:req.body.contact,email:req.body.email}
    //use data to users array 
    userController.adduser(user)
    res.send({msg:"useradded",data:"xyz"})
})
router.put("/",(req,res)=>
{
    res.send(" method for put ")
})
router.delete("/",(req,res)=>
{
    res.send(" method for delete ")
})

module.exports = router