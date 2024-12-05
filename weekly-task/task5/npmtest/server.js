const http = require('http'); //Import Node.js core module
const server = http.createServer(function(req, res){
    //creating server handle incoming requested here
    //res.writeHead(200,{'Content-Type':'text/html'});
    //res.write('Hello World!');
    //res.end();

    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    }

    else if (req.url == '/student') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();
    }
    else if (req.url == '/admin') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();
    }
    else if (req.url == '/data') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({message:"Hello World JSON"}));
        res.end();
    }
    else 
      res.end('Invalid Request!');
})
server.listen(8000);
console.log('Node.js web server at port 8000 is ruuning..');