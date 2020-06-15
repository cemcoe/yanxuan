// 项目中间件
let express = require("express");
let app = express();

// 解决跨域
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  if (req.method == "OPTIONS") res.send(200);
  /*让options请求快速返回*/ else next();
});

app.get("/search", (req, res) => {
  let _searchKey = req.query.search_key;

  // 临时商品，走流程
  let _tempGoods = [
    {
      name: "方便面",
      price: 120,
    },
    {
      name: "辣条",
      price: 10,
    },
    {
      name: "矿泉水",
      price: 1,
    },
  ];
  
  // 过滤出结果
  let _filterGoods = _tempGoods.filter(n => {
    return n.name.indexOf( _searchKey) !== -1
  })

  // 找不到结果时
  // 这里简化只返回一个结果
  let _resultObj = _filterGoods.length > 0 ? _filterGoods[0] : {msg: "没有结果"}

  res.send(_resultObj);
});

app.get("/get_tabBtn_list", (req, res) => {
  let _d = ['推荐', '居家生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', ]
  res.send(_d)
})

app.listen(3344, () => {
  console.log("server is running");
});
