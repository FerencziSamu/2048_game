const http = require('http');
const port=process.env.PORT || 5000
var fs = require('fs');
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
  fs.readFile('index.html', function(err, data){
    if(err){
      return console.log(err);
    }
  res.end(data);
  });
});
server.listen(port,() => {
console.log(`Server running at port `+port);
});
