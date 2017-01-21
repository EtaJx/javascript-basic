var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    res.writeHead(200, { "content-type": "text/plain" });
    fs.createReadStream('./resource.json').pipe(res);
    
}).listen(3000);
console.log('server running')
