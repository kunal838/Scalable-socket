const {Server} = require("socket.io")
class SocketService{
    _io;
    arr;
    constructor(server){
        this.arr=[];
        console.log("init socket_server");
        this._io = new Server(server);

    }
    init_events(){
        this._io.on("connection",(socket)=>{
            this.arr.push(socket);
            console.log("new user connected");
            socket.on("message",(msg)=>{
                console.log(msg);
                this._io.emit(msg);

            })
        })
    }
    numberofuser(){
       this.arr.forEach(data=>console.log(data))
    }

     

  
    
}
module.exports = SocketService;