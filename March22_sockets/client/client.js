'use strict';

//setInterval(function() {
//	getJson('/api/time').then(data => {
//		document.getElementById('container').innerHTML = data.time;
//	});
//}, 1000);


var socket = io.connect('http://localhost:3000');
socket.on('time', function (data) {

	document.getElementById('container').innerHTML = data.time;
	//console.log(data);
	//socket.emit('display time', {
	//	my: 'data'
	//});

});

function getJson(endpoint) {
	return window.fetch(endpoint).then(response => {
		return response.json()
	});
}