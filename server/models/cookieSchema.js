const mongoose = require('mongoose')

const cookieSchema = new mongoose.Schema({
  name: String,
  type: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Type'
  }
})

module.exports = mongoose.model('Cookie', cookieSchema, 'db_cookie')
