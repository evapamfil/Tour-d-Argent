/*============================================================
#title            : La Tour d’Argent
#description      : JS for server node 
#author           : PAMFIL Eva
#date             : 2017/05/22
#version          : Constantly on progress
#usage            : JAVASCRIPT
#notes            : 
=============================================================*/


var express = require('express');
var app = express();
var server = require('http').createServer(app);

//folder static
app.use('/static/css', express.static(__dirname + '/public/css'));
app.use('/static/js', express.static(__dirname + '/public/js'));
app.use('/static/font', express.static(__dirname + '/public/font'));
app.use('/static/pictures', express.static(__dirname + '/public/pictures'));
//STIWCH HTML
app.use('/static/', express.static(__dirname + '/views/'));
app.get('/', function (req, res) {
    console.log('REQ on /');
    res.sendFile(__dirname + '/views/index.html');
});
server.listen(1337);
console.log('server listening on port 1337');