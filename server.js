const http = require("http")
// nodemon
let server = http.createServer((req,res)=>
{
    let u = req.url
    let method = req.method
    console.log(u + method)
    if(u =="/user" && method=="POST")
    {
        res.write("this is post method of user")
    }
    else if(u=="/user" && method=="GET")
    {
        res.write("this is get method of user")
    }
  
res.end()
})

server.listen(8080,()=>console.log("server running on 8080"))

// http.createServer((req,res)=>{
//     console.log(req.url)
//     console.log(req.method)
//     res.write("welcome")
//     res.write("welcomet o node js server")
//     res.end()
// }).listen(8080,()=>console.log("server started"))