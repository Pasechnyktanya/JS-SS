const http = require('http'); 
const server = http.createServer(function (req, res) { 
});
server.listen(5500); 
console.log("Hello Node.js, я не можу з тобою розібратися :(");

server = http.createServer(function (req, res) {
    if (req.url == "/") {         
        res.writeHead(200, {"Content-Type":"text/html"}); 
        res.write('<html><body><p>Получилось</p></body></html>');
        res.end();    
    }
    else if (req.url == "/not") {        
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write('<html><body><p>Не зовсім></html>');
        res.end();    
    }
    else
        res.end("Жах");
});
server.listen(5000);
console.log("Hello Node.js, я не можу з тобою розібратися :(");