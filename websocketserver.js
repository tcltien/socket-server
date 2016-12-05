// Require HTTP module (to start server) and Socket.IO
var http = require('http');
var path    = require("path")
var WebSocket = require('ws');

var app = require('express')();
var server = require('http').createServer(app);

var ws = new WebSocket('wss://priceservice.vndirect.com.vn/realtime/199/thnzr6oq/websocket', {
// var ws = new WebSocket('ws://localhost:8888', {
  protocolVersion: 8,
  origin: 'http://websocket.org'
});

ws.on('open', function open() {
  console.log('connected');
  
});

ws.on('close', function close() {
  console.log('disconnected');
});

ws.on('message', function message(data, flags) {
  console.log(data);
});

ws.on('realtime', function message(data, flags) {
  console.log('real time');
});


app.get('/index',function(req,res){
  res.sendFile("C://Users//tienhal//Downloads//websockets//socket-client.html");
  //__dirname : It will resolve to your project folder.
});

module.exports = app;  

server.listen(8881,function(){
  console.log("Started on PORT 8881");
})