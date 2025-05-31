const express = require("express")
const router  = express.Router();
router.get("/",(req,res)=>
{
    res.send("get method for user ")
})
router.post("/",(req,res)=>
{
    res.send(" method for post ")
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