const express = require('express');

// Constants
const PORT = 3000;
const HOST = '127.0.0.1';

// App
const app = express();

// 提供靜態檔案顯示
app.use('/', express.static(__dirname + '/wwwroot'));

// 允許跨網域 GET, POST, PUT, DELETE, OPTIONS 請求
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// 不允許跨網域Request的話，可以關閉上面的 app.use()設定

// app.get('/', (req, res) => {
//     res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
//     res.write('Hello world , Node.js + Express.js </br>');
//     res.write('   1. Cross-Origin Resource Sharin (CORS) </br>');
//     res.write('   2. req.params拿到參數 </br>');
//     res.write('   3. req.query參數 </br>');
//     res.end();
// });
// 路由
app.get('/about',(req,res) => {
    res.send('<h1>這是 About Page</h1>')
})

// 路由/:參數
// http://127.0.0.1:3000/API/123/OBI-159-app-874
app.get('/api/:id/:Nkey',(req,res)=>{
    console.log('/api ...');
    // 顯示網址 取得 /API/123/OBI-159-app-874 路徑
    console.log(req.url);
    // 取得參數的物件 取得 /API 的參數 :id , :nKey
    let myReq = req.params;
    // 以json傳送回參數
    // res.json(myReq); 

    // 以html方式傳送回去
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write('id : ' + myReq.id + '</br>');
    res.write('nKey : ' + myReq.Nkey + '</br>');
    res.end();
})

// GET 參數
// http://127.0.0.1:3000/sayhello?name=David&email=davidtpe@seed.net.tw
var url = require('url');
app.get('/sayhello',(req,res)=>{
    // 方法1 , url parse 不建議用此方法
    var q = url.parse(req.url,true).query;
    console.log(q);
    
    // 方法2 , req.query
    let myReq = req.query;
    res.json(myReq); 
    // res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    // res.write('url.parse eMail : ' + q.email + '</br></br>');
    // res.write('name : ' + myReq.name + '</br>');
    // res.write('eMail : ' + myReq.email + '</br>');
    // res.end();
})

// 路由/:參數 + GET 參數
// http://127.0.0.1:3000/saygoodbye/davidTPE?msg=GoodBYe
app.get('/saygoodbye/:name',(req,res)=>{
    let myParams = req.params;
    let myQuery = req.query;
    let myResp = [];
    myResp.push(myParams);
    myResp.push(myQuery);
    // res.json(myParams);
    // res.json(myQuery);
    res.json(myResp);
    res.end();
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);