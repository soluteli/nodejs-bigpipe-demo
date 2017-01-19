var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.write('hello')
  res.write('<br>dodo')
  res.end()
})

app.listen(9091)