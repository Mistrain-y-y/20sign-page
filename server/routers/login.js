// 登录路由
const express = require('express')
const router = express.Router() // 创建路由对象
const User = require('../database/database')

// 根目录是 /api/login
router.post('/', (req, res) => {
  console.log(req.body)
  User.findOne(req.body)
  .then(data => {
    if(!data) {// 数据库中没有查找到, null
      res.status(401).json({errors: {
        password: '用户名或密码错误!'
      }})
    } else {// 查找到了, 允许登录
      res.json({
        success: true,
        errors: {}
      })
    }
  })
})

module.exports = router