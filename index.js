const http = require('http')
const parseString = require('xml2js').parseString
const url = 'http://feeds.rebuild.fm/rebuildfm'
var data = ''

var req = http.request(url, (res) => {
  res.setEncoding('utf8')
  res.on('data', (chunk) => {
    data += chunk
  });
  res.on('end', () => {
    parseString(data, function (err, result) {
      result.rss.channel[0].item.forEach((item) => {
        // item.enclosure[0]['$'].url
      })
    })
  });
})

req.end()
