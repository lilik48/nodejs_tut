var http = require('http');
// import module
var dt = require('./myfirstmodule')
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // call module
    res.write('The date and time are currently:' + dt.myDateTime());
    // split query string
    var q = url.parse(req.url, true).query;
    var txt = q.a + " " + q.b;
    res.write(txt);

    // display request string
    // res.write(req.url);

    // display text
    res.end('Hello world!');
}).listen(8080);