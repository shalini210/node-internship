const http = require("http")
http.createServer((req,res)=>{

    res.write("welcome")
    res.write("welcomet o node js server")
    res.end()
}).listen(8080,()=>console.log("server started"))