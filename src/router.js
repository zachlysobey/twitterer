const Router = require('koa-router')

const router = new Router()

router.get('/', async ctx => {
    ctx.body = 'Hello, Twitterer!'
})

router.post('/tweet', async ctx => {
    ctx.body = 'Twittering soon!'
})

module.exports = { router }
