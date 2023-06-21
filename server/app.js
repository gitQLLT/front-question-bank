const express = require('express');
const hero = require('./router/hero');
const cookie = require('./router/cookie');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');//

//这一句是连接上数据库
mongoose.connect('mongodb://123.207.47.230/myDbs', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open' , () => {
  console.log('数据库连接成功')
})
mongoose.connection.once('close' , () => {
  console.log('数据库连接关闭')
})

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/hero', hero)
app.use('/cookie', cookie)
app.listen(3000, () => {
  console.log('app listening on port 3000.')
})


