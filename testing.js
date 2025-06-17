const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

const clients = new Map();

wss.on('connection', ws => {
  const id = generateUniqueID();
  clients.set(id, ws);
  ws.on('message', message => {
    try {
      const parsedMessage = JSON.parse(message);
      const { to, text } =  parsedMessage;
        console.log(parsedMessage)
      if (to && text) {
        const recipient = clients.get(to);
        if(recipient){
            recipient.send(JSON.stringify({from: id, text: text}))
        } else {
            ws.send(JSON.stringify({error: 'Recipient not found'}))
        }
      } else{
        ws.send(JSON.stringify({error: 'Invalid message format'}))
      }
    } catch(error){
        ws.send(JSON.stringify({error: 'Invalid JSON format'}))
    }
  });

  ws.on('close', () => {
    clients.delete(id);
  });

  ws.send(JSON.stringify({id:id}))
});

function generateUniqueID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

console.log('WebSocket server started on port 8080');


// const websocket = require("ws")
// const wss = new websocket.Server({port:8080})
// wss.on("connection",(ws)=>
// {
//     console.log("new client connnected")
//     ws.on("message",(msg)=>{
//         console.log("received msg : "+msg)
//         if(msg =="hi")
//         {
//             ws.send("hii how are you today")
//         }
//         else
//         {
//             ws.send("in else ")
//         }
//         ws.on("close",()=>
//         {
//             console.log("client disconnected")
//         })
//         ws.send("welcome to web socket server")
//     })

// })
// console.log("web socket server is running")