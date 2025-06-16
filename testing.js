
const websocket = require("ws")
const wss = new websocket.Server({port:8080})
wss.on("connection",(ws)=>
{
    console.log("new client connnected")
    ws.on("message",(msg)=>{
            switch (((msg).toString()).toLowerCase()) {
                case "hi":
                    ws.send("hello how are you today")
                    break;
                    case "fine":
                ws.send("good to hear")
                    break;
            
                default:
                    ws.send("WE are working for more ")
                    break;
            }

        ws.on("close",()=>
        {
            console.log("client disconnected")
        })
       
    })

})
console.log("web socket server is running")