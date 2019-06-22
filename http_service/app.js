const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// 創建一個server，根目錄就是hello world
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

// 啟動server監聽
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});