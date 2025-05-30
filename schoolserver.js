const express = require("express") 
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>
{
    res.sendFile(__dirname+"/home.html")
})
app.get("/contact",(req,res)=>
{
    // console.log(__dirname)
    res.sendFile( __dirname+"/contact.html")
})
app.post("/contact",(req,res)=>
{
    let user = req.body;

    res.send(`welcome ${user.username} we will contact you <br> soon on ${user.usercontact}
        <a href="/">Go to home </a>`)
    // console.log(__dirname)
    // res.sendFile( __dirname+"/contact.html")
})


app.get("/teacher",(req,res)=>
{
    res.send("get method for teacher")
})
app.post("/teacher",(req,res)=>
{
    res.send("post method for teacher")
})
app.get("/student",(req,res)=>
{
    res.send("get method for student")
})
app.post("/student",(req,res)=>
{
    res.send("post method for student")
})
app.get("/staff",(req,res)=>
{
    res.send("get method for staff")
})
app.post("/staff",(req,res)=>
{
    res.send("post method for staff")
})
app.listen(8080,()=>console.log("server running on 8080"))
