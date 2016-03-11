var net = require('net');
var handleRequest = require('./requestHandler.js');

var server = net.createServer((socket)=>{
    var data = '';

    socket.on('data', (chunk)=>{
        chunk = chunk.toString('utf8');
        data += chunk;
        process.stdout.write(chunk);

        // '\r\n' carriage return - new line
        if(chunk.endsWith('\r\n\r\n')) {
            console.log('Headers finished');
            handleRequest(socket, data);
        }
    });

    socket.on('end', ()=>{
        console.log('client disconnected');
    });
});

server.listen(3001);