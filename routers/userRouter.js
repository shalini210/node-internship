const express = require("express")
const router  = express.Router();
var users = [
  {
    "id": 1,
    "name": "Alice Johnson",
    "contact": "555-1234",
    "email": "alice.johnson@example.com"
  },
  {
    "id": 2,
    "name": "Bob Smith",
    "contact": "555-5678",
    "email": "bob.smith@example.com"
  },
  {
    "id": 3,
    "name": "Charlie Davis",
    "contact": "555-9012",
    "email": "charlie.davis@example.com"
  },
  {
    "id": 4,
    "name": "Dana Lee",
    "contact": "555-3456",
    "email": "dana.lee@example.com"
  },
  {
    "id": 5,
    "name": "Ethan Moore",
    "contact": "555-7890",
    "email": "ethan.moore@example.com"
  }
]

router.get("/",(req,res)=>
{
    res.send(users)
})
router.post("/",(req,res)=>
{
    console.log(req.body)
    //use data to users array 
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