// Import the 'http' module to create an HTTP server
const http = require('http');

// Define the hostname and port where the server will listen
const hostname = '127.0.0.1'; // You can change this to your server's IP or domain
const port = 3000; // You can choose any available port you prefer

// Create an HTTP server using the 'http' module
const server = http.createServer((req, res) => {
  // Set the HTTP response header with a 200 OK status and plain text content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Write the "Welcome" message to the response
  res.end('Welcome to Node.js Server !!!\n');
});

// Start the server and have it listen on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
