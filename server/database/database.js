const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/play', {
  // 连接数据库 play
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('数据库连接成功!'),
err => console.log(err, '数据库连接失败...'))

// 创建集合规则
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, '必须传入 username!'],
    trim: true
  },
  password: {
    type: String,
    required: [true, '必须传入 password!'],
    trim: true
  }
})

// 创建集合
const User = mongoose.model('User', userSchema)

module.exports = User