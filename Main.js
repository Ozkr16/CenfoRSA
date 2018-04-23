//RSA module
var RSA = require('encriptacion');

//File System module
var fs = require('fs');

//Express dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
var port = process.env.PORT || 3000;

//Constants
const MAX_STRING_SIZE = 4096

// p 11 q 47 k 10121  
//Naive funtion that checks the validity of a strings
function isValidString(stringValue) {
    if (stringValue && typeof stringValue === 'string' && stringValue.length < MAX_STRING_SIZE) {
        return true;
    } else {
        return false;
    }
}

//Very simple custom template engine, replaces 'token' with 'value' in the html file
app.engine('html', function (filePath, options, callback) {
    fs.readFile(filePath, 'utf8', function (err, content) {
        if (err) return callback(err)
        var rendered = content.replace(options.token, options.value);
        return callback(null, rendered)
    })
})

//Adds a route to encript messages using POST
app.post('/encrypt', urlencodedParser, function (req, res) {
    //Checks if the data received is valid
    if (isValidString(req.body.data)) {
        //Encrypts the received data
        var encryptedInput = RSA.RSAEncrypt(req.body.data);
        //Shows the encrypted data to the user
        res.render('index.html', {
            token: '#result#',
            value: 'Encriptado: ' + encryptedInput
        })
    } else {
        //The string is not valid, returns the default page
        res.sendFile(__dirname + '/index.html');
    }
});

//Adds a route to decrypt messages using POST
app.post('/decrypt', urlencodedParser, function (req, res) {
    //Checks if the data received is valid    
    if (isValidString(req.body.data)) {
        //Decrypts the received data        
        var plaintext = RSA.RSADecrypt(req.body.data);
        //Shows the decrypted data to the user        
        res.render('index.html', {
            token: '#result#',
            value: 'Desencriptado: ' + plaintext
        })
    } else {
        //The string is not valid, returns the default page        
        res.sendFile(__dirname + '/index.html');
    }
});

//Default route, shows the main page
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

//Enables use of static files (required to serve CSS)
app.use(express.static('.'));
//Sets the local route for the template engine
app.set('views', './');
//Initializes the template engine with our simple implementation
app.set('view engine', 'html');

//Starts the server listener
http.listen(port, function () {
    console.log('listening on *:' + port);
});