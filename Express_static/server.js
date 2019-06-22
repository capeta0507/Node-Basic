const express = require('express');

// Constants
const PORT = 3000;
const HOST = '127.0.0.1';

// App
const app = express();
// 提供靜態檔案顯示
app.use('/', express.static(__dirname + '/wwwroot'));
// http://127.0.0.1:3000/root/ 讀取 index.html 

// 提供 RESTful API 回應
app.get('/api', (req, res) => {
    res.send('Hello world , \nNode.js + Express.js\nGood bye');
    // res.write("Hello world ,\n");
    // res.write("Node.js + Express.js\n");
    // res.end("Good bye");
  });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
