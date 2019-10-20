require('dotenv').config()
const Koa = require('koa')
const logger = require('koa-logger')

const { router } = require('./router')

const { TEST_ENV_VARIABLE } = process.env

if (TEST_ENV_VARIABLE) {
    console.log(TEST_ENV_VARIABLE)
} else {
    console.warn(
        'missing TEST_ENV_VARIABLE env variable.',
        'did you remember to "cp .env.sample .env"?',
    )
}

const app = new Koa()

app.use(logger())
    .use(router.routes())
    .use(router.allowedMethods())

console.log('server listening on http://localhost:3000')
app.listen(3000)
