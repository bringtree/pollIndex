const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const mongoose = require('mongoose')

let router = new Router()

app.use(bodyParser())

mongoose.connect('mongoodb://bringtree:bringtree@119.29.59.163:27017/admin')
let candidateSchema = mongoose.Schema({
  name: String,
  grade: String,
  faculty: String,
  political: String,
  work: String,
  honor: String,
  evaluate: String,
  motto: String,
  uid: String,
  src: String,
  good: {type: Number, default: 0},
  bad: {type: Number, default: 0},
  neutrality: {type: Number, default: 0}
})

let candidateModel = mongoose.model('candidateSchema', candidateSchema)

router.get('/api/getinfo',async function (ctx) {

})

app.use(router.routes())
  .use(router.allowedMethods())
app.listen(3000)

