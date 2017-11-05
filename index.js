/**
 * Created by 27353 on 2017/10/30.
 */
var express = require('express');
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

app.post('/login', function (request, response) {
    var user = {
        username: request.body.UserName,
        password: request.body.Pwd,

    };
    console.log(user);
    db.findByUsername(user, function (error, data) {
        if(data) {
            response.send({state: "success", username: data})
        }else {
            response.send({state:'error'})
        }
    })

})
function handdata(request) {
    var grade = {
        id: request.body.id,
        name: request.body.name,
        sex: request.body.sex,
        height: request.body.height,
        weight: request.body.weight,
        lung: request.body.lung,
        frun: request.body.frun,
        jump: request.body.jump,
        zuowei: request.body.zuowei,
        erun: request.body.erun,
        onerun: request.body.onerun,
        ywqz: request.body.ywqz,
        ytxs: request.body.ytxs,
        zongfen: '',
        level: '',
        xuejihao: request.body.user

    }
    return grade;
}
app.post('/postgrade', function (request, response) {
    var grade = handdata(request);
    db.postOne(grade, function (err, data) {
        if (data == "OK") {
            response.send({
                state: "OK"
            })
        } else {
            console.log(err);
            response.send({
                state: "error"
            })
        }
    })
});
app.put('/postgrade',function (request,response) {
    var grade = handdata(request);
    db.putOne(grade, function (err, data) {
        if (data == "OK") {
            response.send({
                state: "OK"
            })
        } else {
            console.log(err);
            response.send({
                state: "error"
            })
        }
    })
});

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
