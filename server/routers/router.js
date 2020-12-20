// 注册路由
const express = require('express')
// 引入规则验证的库
const isEmpty = require('lodash/isEmpty')
const validator = require('validator')
const router = express.Router() // 创建路由对象
const User = require('../database/database')

const validate = data => { 
  // 验证用户名和密码是否为空, 个人感觉这个验证应该放在前端, 没有必要发请求
  const {
    username,
    password
  } = data
  let errors = {} // 错误对象
  if (validator.isEmpty(username)) { // 如果为空
    errors.username = '请输入用户名!'
  }
  if (validator.isEmpty(password)) {
    errors.password = '请输入密码!'
  }
  return {
    errors,
    isValid: isEmpty(errors)
    // 亲测 validator.isEmpty 只能接受字符串
  }
}

// 根目录是 /api/users
router.post('/', (req, res) => {
  console.log('req.body:', req.body)
  const {
    errors,
    isValid
  } = validate(req.body)
  if (isValid) { // 合法, 即都不为空
    // 注册页面, 添加数据进数据库
    User.create(req.body)
      .then(data => console.log(data))
    res.json({
      success: true,
      errors // 这里的 errors 是空对象 {}
    })
  } else { // 不合法
    res.status(400).json(errors)
  }
})

// 验证用户名是否重复
router.get('/:username', (req, res) => {
  console.log('query:', req.params)
  User.findOne(req.params)
    .then(data => {
      console.log(data)
      if (!data) { // 没有查询到会返回 null
        res.json({success: true})
      } else { // 查询成功, 用户名重复了
        res.status(400).json({
          username: '用户名重复了, 请换一个用户名!'
        })
      }
    })
})

module.exports = router