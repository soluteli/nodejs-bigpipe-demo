var koa = require('koa')
var app = koa()
var co = require('co')
const Readable = require('stream').Readable

const sleep = ms => new Promise(r => setTimeout(r, ms))

app.use(function* () {
  const view = new Readable()
  view._read = () => { }

  this.body = view
  this.type = 'html'
  this.status = 200

  view.push('loading...<br>')

  co(function* () {
      yield sleep(2000)
      view.push(`timer: 2000ms<br>`)
      yield sleep(5000)
      view.push(`timer: 5000ms<br>`)

      /** 结束传送 */
      view.push(null)
  }).catch(e => { })
})

app.listen(9092)