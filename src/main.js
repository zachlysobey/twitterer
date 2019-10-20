require('dotenv').config()
const Koa = require('koa')
const logger = require('koa-logger')

const { router } = require('./router')

const app = new Koa()

app.use(logger())
    .use(router.routes())
    .use(router.allowedMethods())

console.log('server listening on http://localhost:3000')
app.listen(3000)
