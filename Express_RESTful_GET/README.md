# Express.js Route
### 什麼是RESTful https://dotblogs.com.tw/jeffyang/2018/04/21/233001
### RESTful /API 傳送參數的方法 :id , :NKey
```javascript=
// 路由/:參數
// http://127.0.0.1:3000/API/123/OBI-159-app-874
app.get('/api/:id/:Nkey',(req,res)=>{
    // console.log('/api ...');
    // 顯示網址
    console.log(req.url);
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    // 取得參數物件
    let myReq = req.params;
    // res.json(myReq); 
    res.write('id : ' + myReq.id + '</br>');
    res.write('nKey : ' + myReq.Nkey + '</br>');
    res.end();
})
```
執行 http://127.0.0.1:3000/API/123/OBI-159-app-874
說明 :
* req.url 取得 /API/123/OBI-159-app-874 路徑
* req.params 取得 /API 的參數 :id , :nKey
* RESTful 概念

### 前端相對應網頁api.html
首先建立沒有action的form表單
```htmlmixed=
<form id="getApi">
    ID: <input id="id" type="text" name="id"> <br>
    NKEY: <input id="Nkey" type="text" name="Nkey"> <br>
    <input id="apiClick" type="button" value="送出"">
    <br>
</form>
```
```javascript=
// 呼叫ajax
// 啟用api click方法
$("#apiClick").click((e) => {
    // 不回應表單submit
    e.preventDefault();
    // console.log("call api");
    // 取得input內容
    let myid = $("#id").val();
    let myNkey = $("#Nkey").val();
    // console.log("call", myid, myNkey);
    // 用ajax呼叫api路徑
    $.ajax({
        type:"GET",
        url:"/api/" + myid + "/" + myNkey,
        success:(result) => {
            // 顯示回應結果
            // console.log(result);
            $("#result").html(result);
        }
    });
});
```
---
### GET 參數 QueryString方法
/sayhello route路徑 傳送 name & email 內容
> req.query
```javascript=
// GET 參數
// http://127.0.0.1:3000/sayhello?name=David&email=davidtpe@seed.net.tw
var url = require('url');
app.get('/sayhello',(req,res)=>{
    // 方法1 , url parse
    var q = url.parse(req.url,true).query;
    console.log(q);
    
    // 方法2 , req.query
    let myReq = req.query;
    // res.json(myReq); 
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write('url.parse eMail : ' + q.email + '</br></br>');
    res.write('name : ' + myReq.name + '</br>');
    res.write('eMail : ' + myReq.email + '</br>');
    res.end();
})
```
執行 http://127.0.0.1:3000/sayhello?name=David&email=davidtpe@seed.net.tw
說明 :
> req.query 取得 GET ?之後的參數 (方法2)
> 也可以用 url.parse(req.url,true).query 取得 (方法1)

### 前端相對應網頁sayhello.html
首先建立沒有action的form表單
```htmlmixed=
<form action="/sayhello" method="GET">
    Name: <input type="text" name="name"> <br>
    Email: <input type="email" name="email"> <br>
    <input type="submit" value="送出">
</form>
```
---
### GET + RESTful 混合
> req.params + req.query
```javascript=
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
```
---

檢視json結構網路服務 https://jsoneditoronline.org/
RESTful 