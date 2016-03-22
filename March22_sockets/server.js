var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

var bodyParser = require('body-parser');
app.locals.moment = require('moment');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/client'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/api/time', function(req, res) {
	res.send({
		time: app.locals.moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')
	});
});

io.on('connection', function (socket) {
	setInterval(function() {

		socket.emit('time', {
			time: app.locals.moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')
		});

	}, 1000);

	//socket.on('my other event', function (data) {
	//	console.log(data);
	//});
});

server.listen(3000, function() {
	console.log('App listening on port 3000...');
});
