
# README

## server 后台代码

1. database 连接 mongoDB 数据库
2. routers 后端路由
   1. login.js 用户登录
   2. users.js 用户注册

## src 前端代码

1. index.js 入口文件
2. routes.jsx 前端路由
3. components 组件
   1. flash 提示框
   2. nav 导航栏

## 修复 bug

### 注册时

1. 最初版本为 username 失焦 onBlur 时发送请求验证用户名, 但 chrome 自动填写时不触发验证.
2. 改为 username 表单 onChange 时发送请求验证用户名, 没有做防抖操作. 并且在组件挂载时就进行一次验证, 以解决 chrome 自动填写表单的问题.
3. 出现新的 bug, setState 操作在发送请求的操作之后, 导致最后一次输入无法触发验证, 于是运用 async await 等待 setState 完成后再进行验证.
4. 解决用户名验证的期间, 能点击注册按钮的 bug, 该期间设置按钮为 disabled.
5. 对表单验证设置防抖, 每次重新输入都会取消上一次请求.(待完成)
