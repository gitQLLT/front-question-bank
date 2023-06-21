const mongoose = require('mongoose')

const heroSchema = new mongoose.Schema({
  heroName :String,
  age : Number,
  heroSex : String,
  address : String,
  heroPosition : [],
  imgArr:[],
  favourite:String,
  explain:String,
})
//这里mongoose.Schema要写上第二个参数，明确指定到数据库中的哪个表取数据

module.exports = mongoose.model('Hero', heroSchema, 'db_hero');
