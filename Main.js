var app = require('express')();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;

app.post('/encrypt', function(req, res) {

    console.log(req);
    res.sendFile(__dirname + '/index.html');
});

app.post('/decrypt', function(req, res) {

    console.log(req);

    res.sendFile(__dirname + '/index.html');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

http.listen(port, function () {
  console.log('listening on *:' + port);
});