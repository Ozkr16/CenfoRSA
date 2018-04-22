var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var port = process.env.PORT || 3000;
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})
var fs = require('fs');
var RSA = require('encriptacion');

app.engine('html', function (filePath, options, callback) {
    fs.readFile(filePath, 'utf8', function (err, content) {
        if (err) return callback(err)
        var rendered = content.replace('#result#', options.result);
        return callback(null, rendered)
    })
})

app.post('/encrypt', urlencodedParser, function (req, res) {
    var encryptedInput = RSA.RSAEncrypt(req.body.data);
    res.render('index.html', {
        result: 'Encriptado: ' + encryptedInput
    })
});

app.post('/decrypt', urlencodedParser, function (req, res) {
    var plaintext = RSA.RSADecrypt(req.body.data);
    res.render('index.html', {
        result: 'Desencriptado: ' + plaintext
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