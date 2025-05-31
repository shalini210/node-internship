const express = require("express")
const app = express()
// admin , user , category,produts
const userRouter = require("./routers/userRouter")
app.use("/user",userRouter)
app.get("/",(req,res)=>
{
    res.send(`user /user for users <br> /admin for admin
        /category for category /products for product`)
})
app.listen(8080,()=>console.log("server running on 8080"))