const Twit = require('twit')

const {
    TWITTER_API_KEY,
    TWITTER_API_SECRET_KEY,
    TWITTER_ACCESS_TOKEN,
    TWITTER_ACCESS_TOKEN_SECRET,
} = process.env

const T = new Twit({
    consumer_key: TWITTER_API_KEY,
    consumer_secret: TWITTER_API_SECRET_KEY,
    access_token: TWITTER_ACCESS_TOKEN,
    access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
})

const postTweet = async ctx => {
    const { tweet } = ctx.params
    const { data, response } = await new Promise((resolve, reject) => {
        T.post('statuses/update', { status: tweet }, (err, data, response) =>
            err ? reject(err) : resolve({ data }),
        )
    })

    console.log({ data, response })

    ctx.body = 'Twittered!'
}

module.exports = {
    postTweet,
}
