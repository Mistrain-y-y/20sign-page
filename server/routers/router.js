// 路由
const express = require('express')
// 引入规则验证的库
const isEmpty = require('lodash/isEmpty')
const validator = require('validator')
const router = express.Router()// 创建路由对象

const validate = data => {// 验证规则
  const {username, password} = data
  let errors = {}// 错误对象
  if (validator.isEmpty(username)) {// 如果为空
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

router.post('/', (req, res) => {
  console.log(req.body)
  const {errors, isValid} = validate(req.body)
  if (isValid) {// 合法
    res.json({success: true, errors})
  } else {// 不合法
    res.status(400).json(errors)
  }
})

module.exports = router