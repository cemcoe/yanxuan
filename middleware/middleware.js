// 项目中间件
let express = require('express')
let app = express()

// 解决跨域
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
  else  next();
});



app.get('/aa', (req, res) => {
  let _n = {
    a: "第一个接口"
  }
  res.send(_n)
})

app.listen(3344, () => {
  console.log("server is running")
})