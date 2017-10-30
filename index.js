/**
 * Created by 27353 on 2017/10/30.
 */
const  express  = require('express');
const  bodyParser = require('body-parser');
const  app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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



var server = app.listen(3030, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});