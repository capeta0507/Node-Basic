# Express.js Route
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