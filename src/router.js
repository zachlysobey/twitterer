const Router = require('koa-router')

const router = new Router()

const { postTweet } = require('./routes/tweet')

router.get('/', async ctx => {
    ctx.body = 'Hello, Twitterer!'
})

router.post('/tweet/:tweet', postTweet)

module.exports = { router }
