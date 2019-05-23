var http = require('http');

http.createServer(function (req,res) {
	res.writeHead(200,{'content-Type': 'text/html'});
	res.end('Hello World my name is Jean Hernandez');
}).listen(8080);