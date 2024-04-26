const express = require("express");
const {Server}  = require("socket.io");


const http = require("http");
const  SocketService  = require("./SocketService");
const app = express();
const server = http.createServer(app);
 
const socketService = new SocketService(server);



socketService.init_events();


app.get("/",(req,res)=>{
    res.send("<h1>Hello from api<h1>");

});



server.listen(8000,()=>{
    console.log("server cunning on 8000");
})
