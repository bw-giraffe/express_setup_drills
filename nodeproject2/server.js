 // server.js

// SERVER-SIDE JAVASCRIPT
//sets up your server
var express = require('express');
var app = express();

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.

var albums = [
	      { 
	        title: 'Cupid Deluxe',
	        artist: 'Blood Orange'
	      },
	      {
	        title: 'M3LL155X - EP',
	        artist: 'FKA twigs'
	      },
	      {
	        title: 'Fake History',
	        artist: 'letlive.'
	      }
	    ];

var animals = [
		{
			name: 'turtle',
			type: 'reptile',
			image: "http://i.huffpost.com/gen/1099617/images/o-TURTLE-facebook.jpg"
		},
		{
			name: 'llama',
			type: 'mammal',
			image: "http://www.gnllama.com/images/llamasAtopHill.jpg"
		},
		{
			name: 'koala',
			type: 'marsupial',
			image: "http://justcuteanimals.com/wp-content/uploads/2014/08/koala-ice-lollie-hat-funny-cool-animal-pictures-summer-pics.jpg"
		}	
	  ];


app.use(express.static('public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', function (req, res) {
    res.sendFile('views/index.html' , { root : __dirname});
});

app.get('/api/albums', function (req, res) {
	res.json(albums);
});

app.get('/api/animals', function (req, res) {
	res.json(animals);
});

app.listen(process.env.PORT || 3000, function() {
	console.log("listening at http://localhost:3000/")
});

