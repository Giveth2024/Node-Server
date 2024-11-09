// Load the http module to create an HTTP server
const http = require('http');

// Define the port number for the server to listen on
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the HTTP status and content type
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  // Write the HTML content with an H1 tag
  res.end('<html><body><h1>Hello World</h1></body></html>');
});

// Make the server listen on the defined port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
