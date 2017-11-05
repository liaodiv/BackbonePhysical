/**
 * Created by 27353 on 2017/10/30.
 */
var express  = require('express');
var bodyParser = require('body-parser');

var db = require('./lib/database');

 app = express();
app.use(bodyParser());
app.use(express.static('public'))




app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/index', function (req, res) {
    console.log('/index');
    res.sendfile('./public/index.html');
});

app.post('/login',function (request,response) {
    var user = {
        username: request.body.UserName,
        password: request.body.Pwd,

    };
    console.log(user);
    db.findByUsername(user,function (error,data) {
        response.send({state:"success",username:data})
    })

})

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

/*
app.get('/', function (req, res) {
    console.log('/');
    res.send('Hello World!');
});

app.use(express.static('public'));

app.get('/index', function (req, res) {
    console.log('/index');
    res.sendfile('./public/index.html');
});




app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
});



var server = app.listen(3031, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});*/
