var http = require('http');
var server = http.createServer();
server.on('request', function(req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('hello, world');
});
server.listen(3000);
console.log('server running at http://localhost:3000');
