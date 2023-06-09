// 加载模块
var request=require("request");
//加载cherrio模块，可以将抓取的网页通过jquery获取节点的方式获取需要的dom
var cheerio=require("cheerio");  
var fs=require('fs');

// 1.直接调用request方法请求url,并且通过回调函数获取返回值
request({
  url: 'https://www.164580.com/biaozhun/list_1_2_90.html',
  method: "GET",
},function(err,res,body){
  const $ = cheerio.load(body);
  let arr = []
  $('#showtree a').each((index,item)=>{
    const name = $(item).text()
    const id = $(item).attr('href')
    const page = name.match(/\(([^)]*)\)/)[1]
    const pageCount = Math.ceil(page/20)
    for(var i=0;i<pageCount;i++){
      arr.push({name,id,page: i+1})
    }
  })
  fs.appendFile('./getLuosi/luosi.json', JSON.stringify(arr), (err) => {
    if (err) throw err;
    console.log('json文件写入成功...')
  })
})
