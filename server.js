var firebase = require("firebase");
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html')
});

io.on('connection', function(socket){

	
	socket.on('marker request', function(){
		
		
	});

});


http.listen(80, function(){
	console.log('listening on *:80')
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

