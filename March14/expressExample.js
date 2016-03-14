var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.locals.moment = require('moment');
var currentTime = app.locals.moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a');
app.use(bodyParser.json()); // json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function (req, res) {
    res.send('<h1 style="text-align:center; padding: 30px;">Main Page!</h1>');
});

app.get('/time', (req, res)=>{
    res.send('<h1>The current time is--> &nbsp;&nbsp;'+currentTime+'</h1>');
});



//app.get('/messages', (req, res)=>{
//    //res.sendfile('March14/fileToGet.json');
//    //res.sendFile('March14/messages.json');
//    var messages = [];
//    res.send(messages);
//
//});

var messages = [];

app.get('/messages', (req, res)=>{
    res.send(messages);
});

app.post('/messages', (req, res)=>{
    messages.push(req.body.user);
    console.log(messages);
    res.send(req.body.id);
});


app.post('/', (req, res)=>{
    res.send('Post Request Made\n');
});

app.delete('/', (req, res)=>{
    res.send('Delete Request Made\n');
});

app.put('/', (req, res)=>{
    res.send('Put Request Made\n');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
