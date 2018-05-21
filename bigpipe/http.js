'use strict'

var http = require('http')

const sleep = ms => new Promise(r => setTimeout(r, ms))

var app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html', 'charset': 'utf-8' })
  
  res.write('loading...<br>')
  
  return sleep(2000).then(function() {
    res.write(`timer: 2000ms<br>`)
    return sleep(5000)
  })
  .then(function() {
    res.write(`timer: 5000ms<br>`)
  }).then(function() {
    res.end()
  })
})

app.listen(3000)
