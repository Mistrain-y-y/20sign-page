// 登录路由
const express = require('express')
const router = express.Router() // 创建路由对象
const User = require('../database/database')
const jwt = require('jsonwebtoken')
const config = require('../config.js')

// 根目录是 /api/login
router.post('/', (req, res) => {
  User.findOne(req.body)
  .then(data => {
    console.log(data)
    if(!data) {// 数据库中没有查找到, null
      res.status(401).json({errors: {
        password: '用户名或密码错误!'
      }})
    } else {// 允许客户端登录
      // 生成和发送 token 令牌发送给客户端
      const token = jwt.sign({
        id: data.id,
        username: data.username
      }, config.jwtSecret)
      // 每次生成的都是唯一的, 同一用户不同次也是不同的
      res.send(token)// 每次前台登陆, 后台都返回更新的 token 令牌
      // 令牌里包含了加密后的用户身份信息
    }
  })
})

module.exports = router