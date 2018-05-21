var path = require('path')
var fs = require('fs')
var express = require('express')
var app = express()

app.use(express.static(path.join(__dirname, 'public')))

var file = fs.createReadStream(path.join(__dirname, 'files', 'data.json'))

app.get('/data', function (req, res) {
  res.type('application/octet-stream');
  file.on('data', function (data) {
    res.write(data)
    console.log('da', data)
  })
  file.on('end', function () {
    res.end()
    console.log('全部读取完毕');
  })
  file.on('close', function () {
    console.log('文件关闭了');
  })
  file.on('error', function (err) {
    console.log('出错了' + err);
  })
})

app.listen(3000)