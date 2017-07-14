const http = require('http');

const server = http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end('<h1>Hello, World!</h1>');
});
server.listen(4000, 'localhost');
console.log('listening on http://localhost:4000')