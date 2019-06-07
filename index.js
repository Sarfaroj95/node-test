var http = require('http');

var server = http.createServer( function (req, res) {
	res.writeHead(200, {'Content-type' : 'text/html'});
	res.write('Sarfaroj Gayen');
	res.end();
});

server.listen(8080, function() {
	console.log('App is running...');
});