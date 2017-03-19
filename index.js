var firebase = require("firebase");
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname ));
app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

	
	socket.on('marker request', function(){
		var data;

    return database.ref('markers/0').once('value').then(function(snapshot){ 
      data = snapshot.toJSON();
    });
		
    io.emit('marker request',data);
	});

});


app.listen(3000, function(){
	console.log('listening on *:3000')
});

//firebase
var config = {
    apiKey: "AIzaSyAnoseJ4ZznNNyAEgH7aNf-X4RQZ_-n4bY",
    authDomain: "testproject-146513.firebaseapp.com",
    databaseURL: "https://testproject-146513.firebaseio.com",
    storageBucket: "testproject-146513.appspot.com",
    messagingSenderId: "589317577943"
};
firebase.initializeApp(config);

var database = firebase.database();

