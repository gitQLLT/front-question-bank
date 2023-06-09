const fs = require('fs')
//加载cherrio模块，可以将抓取的网页通过jquery获取节点的方式获取需要的dom
var cheerio=require("cheerio");  
var request=require("request");

fs.readFile('./getLuosi/luosi.json','utf8',(err,data)=>{
  if (err) throw err;
  let json = JSON.parse(data);
  var index = 0
  var interval = setInterval(() => {
    request({
      url: 'https://www.164580.com/biaozhun/'+json[index].id+'?page='+json[index].page,
      method: "GET",
    },function(err,res,body){
      const $ = cheerio.load(body);
      let arr = []
      $('.layui-table a[class=blue]').each(function(index){
        console.log($('b',this).text())
        arr.push({type: json[index].name,name: $('b',this).text(),id: $(this).attr('href')})
      })
      fs.appendFile('./getLuosi/luosi1.json', JSON.stringify(arr), (err) => {
        if (err) throw err;
        console.log('json文件写入成功...')
      })
    })
  index++
}, 800);
})