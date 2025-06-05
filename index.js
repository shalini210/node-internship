const express = require("express")
const dbconfig = require("./dbconfig")
const studentRouter = require("./routers/studentRouter")
const app = express()
// admin , user , category,produts
const userRouter = require("./routers/userRouter")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/user",userRouter)
app.use("/student",studentRouter)
app.get("/",(req,res)=>
{
    res.send(`user /user for users <br> /admin for admin
        /category for category /products for product`)
})
app.listen(8080,()=>console.log("server running on 8080"))