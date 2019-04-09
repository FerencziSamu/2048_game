const http = require('http');
const port=process.env.PORT || 5000
var fs = require('fs');
var index = fs.readFile('web/index.html');
const server = http.createServer((req, res) => {

res.statusCode = 200;

res.setHeader('Content-Type', 'text/html');

res.end(index);

});

server.listen(port,() => {

console.log(`Server running at port `+port);

});
