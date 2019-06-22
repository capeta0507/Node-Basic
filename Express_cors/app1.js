const express = require('express');

// Constants
const PORT = 3000;
const HOST = '127.0.0.1';

// App
const app = express();

// 允許跨網域 GET, POST, PUT, DELETE, OPTIONS 請求
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// 不允許跨網域Request的話，可以關閉上面的 app.use()設定

app.get('/', (req, res) => {
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write('Hello world , Node.js + Express.js </br>');
    res.write('   1. Cross-Origin Resource Sharin (CORS) </br>');
    res.write('   2. req.params拿到參數 </br>');
    res.write('   3. req.query參數 </br>');
    res.end();
});
// 路由
app.get('/about',(req,res) => {
    res.send('<h1>這是 About Page</h1>')
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);