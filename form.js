
var http = require('http');
var fs = require('fs');

var server = http.createServer( (req, res) => {
  // Print the name of the file for which request is made.
  console.log("Admin"+ req.url);
  fs.readFile("./Admin.html",function(error, data){
    if (error) {
      res.writeHead(404);
      res.write('Contents you are looking for-not found');
      res.end();
    }  
    else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data.toString());
      res.end();
    }
  });
});

server.listen(3000, 'localhost');

console.log('Server running ');