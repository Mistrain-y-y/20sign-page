const express = require('express')
const router = require('./routers/router')
const bodyParser = require('body-parser')

const app = express()// 创建服务器

app.use(bodyParser.json())
// 使用请求体解析模块, 亲测: 必须要写在根目录上面

app.use('/api/users', router)
// 参数1: 根目录

app.listen(3030, () => console.log('服务器启动...'))