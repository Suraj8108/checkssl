var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('8B65F5773F961FE8AC00D986D1B9D6173E1BEDE41E39DB2CE872222209B089ED.7bf0e83074a62a1.comodoca.com');
}).listen(80);

// Console will print the message
console.log('Server running at http://127.0.0.1:80/');