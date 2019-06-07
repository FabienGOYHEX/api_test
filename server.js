//imports

const express = require('express');

// Instantiate  Serveur
const server = express();

// configure route
server.get('/', function(req, res) {
	res.setHeader('Content-Type', 'text/html');
	res.status(200).send('<h1>welcome to my server</h1>');
});

// Launch server
server.listen(8081, function() {
	console.log('server en ecoute');
});
