const Koa = require('koa')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const json = require('koa-json')
const mongoose = require('mongoose')
const koaStatic = require('koa-static')
const views = require('koa-view')
const routeConfig = require('./controllers/index')

const app = new Koa()

app.use(bodyParser())
app.use(json())
app.use(koaStatic(__dirname + '/public'))

app.use(views(__dirname + '/views', {
    extension: 'ejs'
}))

router.get(/\/*/, async (ctx, next) => {
    await ctx.render('index')
})

app.use(router.routes(), router.allowedMethods())

app.on('error', (err, ctx) => {
    console.log('server error', err, ctx)
})

app.listen(3000, () => {
    console.log('server on 3000')
})

mongoose.connect(
    'mongodb://localhost:27017/demo',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, db) => {
        err ? console.error('connect failed!') : console.log('connect success!')
    }
)