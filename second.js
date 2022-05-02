var http = require('http');
http.createServer(function(req,res)
{
    const name="wad";
    res.writeHead(200,{'Content-Type':'text/plain'});
    console.log('name');
}).listen(9000);