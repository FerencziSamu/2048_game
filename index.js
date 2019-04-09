const http = require('http');
const port=process.env.PORT || 5000
const server = http.createServer((req, res) => {

res.statusCode = 200;

res.setHeader('Content-Type', 'text/html');

res.end('web/index.html');

});

server.listen(port,() => {

console.log(`Server running at port `+port);

});