var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var port = process.env.PORT || 3000;
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})
var fs = require('fs');

app.engine('html', function (filePath, options, callback) {
    fs.readFile(filePath, 'utf8', function (err, content) {
        if (err) return callback(err)
        var rendered = content.replace('#result#', options.result);
        return callback(null, rendered)
    })
})

app.post('/encrypt', urlencodedParser, function (req, res) {
    res.render('index.html', {
        result: 'Encriptado: ' + req.body.data
    })
});

app.post('/decrypt', urlencodedParser, function (req, res) {
    res.render('index.html', {
        result: 'Desencriptado: ' + req.body.data
    })
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use(express.static('.'));
app.set('views', './');
app.set('view engine', 'html');

http.listen(port, function () {
    console.log('listening on *:' + port);
});