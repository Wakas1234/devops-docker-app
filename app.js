const http = require('http');

const server = http.createServer((req, res) => {
  res.write("Hello from CI/CD Pipeline 🚀");
  res.end();
});

server.listen(3000);

