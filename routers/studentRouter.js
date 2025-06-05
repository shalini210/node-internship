const express = require("express")
const studentController = require("../controllers/studentController")
const router = express.Router()
router.post("/",(req,res)=>
{
    let s = {name:req.body.name,
        age:parseInt(req.body.age)
        ,city:req.body.city}
        studentController.insertStudent(s)
        res.send("record added")
    })

module.exports = router