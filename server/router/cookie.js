const express = require('express')
const router = express.Router()

const Type = require('../models/typeSchema')
const Cookie = require('../models/cookieSchema')



router.post('/save',(req,res)=>{
  const tp1 = new Type({
    name: '素菜'
  })
  tp1.save((err,result)=>{
    if(err){
      console.log(err, '错误了')
    }else{
      const ck1 = new Cookie({
        name: '拔丝土豆',
        type: result._id
      })
      ck1.save()
      res.json({
        status:"success",
        message:"新增成功"
      });
    }
  })
})

module.exports = router
