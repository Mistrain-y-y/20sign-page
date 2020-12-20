const express = require('express')
const users = require('./routers/router')
const login = require('./routers/login')
const bodyParser = require('body-parser')

const app = express()// 创建服务器

app.use(bodyParser.json())
// 使用请求体解析模块, 亲测: 必须要写在根目录上面

app.use('/api/users', users)
// 参数1: 根目录

app.use('/api/login', login)

app.listen(3030, () => console.log('服务器启动...'))