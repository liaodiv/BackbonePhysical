/**
 * Created by 27353 on 2017/10/30.
 */
const express  = require('express');
const bodyParser = require('body-parser');
/*const passport = require('passport');
const Strategy =require('passport-local').Strategy;*/

/*const db = require('./lib/database');*/

/*passport.use(new Strategy(function (username,password,cb) {
        db.findByUsername(username,function (err,user) {
            if(err){
                return cb(err);
            }
            if(!user) {
                return cb(null,false);
            }
            if( user.password != password){
                return cb(null,false);
            }
        });
}));

passport.serializeUser(function (user, cb) {
    cb(null,user.id);
});

passport.deserializeUser(function (id,cb) {

})*/


const app = express();


/*app.use(require('cookie-parser'));*/
/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));*/


app.get('/', function (req, res) {
    console.log('/');
    res.send('Hello World!');
});

app.use(express.static('public'));

app.get('/index', function (req, res) {
    console.log('/index');
    // res.send('Hello World!');
    res.sendfile('./public/index.html');
});




app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
});



var server = app.listen(3031, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});