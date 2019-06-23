const express = require('express');

// Constants
const PORT = 3000;
const HOST = '127.0.0.1';

// App
const app = express();

var bodyParser = require('body-parser');
// create application/json parser (POST 傳送 JOSN 資料過來的bodyParser)
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser  (POST 傳送 client表單 資料過來的bodyParser)
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// 提供靜態檔案顯示
app.use('/', express.static(__dirname + '/wwwroot'));

// 允許跨網域 GET, POST, PUT, DELETE, OPTIONS 請求
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// POST 參數
// POST /joinus gets urlencoded bodies
// http://127.0.0.1:3000/joinus
// body x-www-form-urlencoded
app.post('/joinus',urlencodedParser,(req,res) =>{
    // console.log('join us ...');
    if(!req.body) {
        res.send("POST no body data ...");
    } else {
        let myJoinUs = req.body;
        console.log(req.body);
        res.json(myJoinUs);
        res.end();
    }
})

// POST 參數
// POST /register gets JOSN bodies
// http://127.0.0.1:3000/register 
// Body raw JSON
app.post('/register',jsonParser,(req,res)=>{
    // console.log("Post register ...");
    if(!req.body){
        res.send("Blank data");
    }else {
        res.send(req.body);
        res.end();
    }
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);