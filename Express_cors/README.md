# Node.js CORS 跨網域設定
### 傳統做法 app1.js
```javascript=
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
```
### 安裝cors套件做法 app2.js

```javascript=
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());
```

參考網址 ： https://developer.mozilla.org/zh-TW/docs/Web/HTTP/CORS