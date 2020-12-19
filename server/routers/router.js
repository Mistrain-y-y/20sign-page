// 路由
const express = require('express')
const router = express.Router()// 创建路由对象

router.get('/', (req, res) => {// 访问/api/users/
  res.send('hello react redux!')
})

module.exports = router