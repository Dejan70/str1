const HTTP_PORT = 1880;
//require('child_process').fork('some_code.js');  //   call stream
//require('child_process').fork('express-app.js'); 
let app    = require('express')();
let server = app.listen(HTTP_PORT);
let io     = require('socket.io')(server);

//cam  
const MjpegProxy = require('mjpeg-proxy').MjpegProxy;
const express = require('express');
const errorHandler = require('errorhandler');
const morgan = require('morgan');
//

//const cam1 = "http://192.168.2.31/videostream.cgi?user=admin&pwd=admin";
//const cam1 = "http://192.168.1.14:8003/?action=stream";
const cam1 = "http://192.168.1.10:8003/?action=stream";

//const cam2 = "http://192.168.2.30/videostream.cgi?user=admin&pwd=admin";
//const cam2 = "http://192.168.1.14:8004/?action=stream";
const cam2 = "http://192.168.1.10:8004/?action=stream";

//var app = express();
app.use(errorHandler({ dumpExceptions: true, showStack: true }));
app.use(morgan('tiny'));
app.set("view options", { layout: false });
//app.use(express.static(__dirname + '/public'));

app.get('/index1.jpg', new MjpegProxy(cam1).proxyRequest);
app.get('/index2.jpg', new MjpegProxy(cam2).proxyRequest);

//app.listen(HTTP_PORT);

console.log("Listening on port " + HTTP_PORT);

/// cam end




/*
var app = require('express')();
var http = require('http').Server(app);
//var io = require('socket.io')(http);
var io = require('socket.io')(app);
*/

///  soc
//soc 2
app.get('/', function(req, res){
    //send the index.html file for all requests
   // res.sendFile(__dirname + '/index.html');
   '/index.html'
   res.sendFile(__dirname + "/public");

  });
   // http.listen(3001, function(){
   //   http.listen(1880, function(){
    //console.log('listening on *:3001');
 // });
  setInterval( function() {
   
   // var msg = Math.random();
   const snd1=[
      {name0:"0",result:"0",name:"0",ip:"0", num:"0",lay:"nn", x:1,y:5,},
      {name0:"0",result:"0",name:"0",ip:"0", num:"0",lay:"nn", x:1,y:5,},
      {name0:"0",result:"0",name:"0",ip:"0", num:"0",lay:"nn", x:1,y:5,},
      {name0:"0",result:"0",name:"0",ip:"0", num:"0",lay:"nn", x:1,y:5,}
    
    ]
  
   var msg = "‚23";
  snd1[1].name0="deki";
   // io.emit('message', msg);
   io.emit('message', snd1);
    // io.emit( msg);
    //console.log (msg);
  }, 1000);
//soc 2 end

 // const express = require('express');
//iz  const app = express();
app.use(express.json());
app.use(express.static(__dirname +"/public"));
//app.use(express.static(__dirname +'/index.html'));

app.post('/save',(req,res) => {
    let msg = req.body.msg;
    res.send("Sve ok1");
            })

app.post('/sav',(req,res) => {
    let msg = req.body.msg;
    res.send("Sve ok2");
             })
/*
app.listen(1880,() => {
      console.log('listening to port 1880');
               })
               */
