'use strict'

const sleep = ms => new Promise(r => setTimeout(r, ms))

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.type('html');   
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