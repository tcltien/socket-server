// Require HTTP module (to start server) and Socket.IO
var http = require('http');
var path    = require("path")
var WebSocket = require('ws');

var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(socket){	
 	var id = setInterval(function() {
	    socket.send(JSON.stringify(process.memoryUsage()), 
	      function() { /* ignore errors */ });
  	}, 1000);
	socket.on('message',function(data) {
		console.log('Get a message from the client:  ' + data.message);
	});
});


app.get('/index',function(req,res){
  res.sendFile("C://Users//tienhal//Downloads//websockets//socket-client.html");
  //__dirname : It will resolve to your project folder.
});

module.exports = app;  

server.listen(8888,function(){
  console.log("Started on PORT 8888");
})