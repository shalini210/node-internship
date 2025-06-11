const fs = require("fs")
fs.appendFile("demo.txt","hello  world ",(err)=>
{
    if(err)
    {  console.log(err)
    }
    else
    { console.log("operation success")    }
})
fs.rmdir("abc",(err)=>
{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log("file deleted")
    }
})
// fs.writeFile("demo.txt","hello  world ",(err)=>
// {
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log("operation success")
//     }
// })
// fs.readFile("demo.txt",(err,data)=>
// {  if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log(data.toString())
//     }
// })