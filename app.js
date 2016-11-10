
//This just gives a reference to express
var express = require('express');

//Create an instance of express
var app = express();

var port = 5000;

//app.use setups middleware. This will be used by express before anything else and then make it way down. Public will serve as a static directory. It will look for the css/styles.css
app.use(express.static('public'));
//An additional statis directory. Any files not found above will then go to this directory. Any files it doesn't find here, will then go to app.get routes
app.use(express.static('src/views'));

//Here, express takes a request from the browser and sending something back
app.get('/', function(req, res){
	res.send('Hello world');
});

app.get('/books', function(req, res){
	res.send('Hello books');
});

//this takes two parameters
app.listen(port, function(err){
	console.log('running server on port ' + port);

});