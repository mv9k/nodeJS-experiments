/**
 * Created by kris on 3/9/16.
 */

var net = require('net');
var events = require('events');

const broadcastName = 'onmessage';
var serverEmitter = new events.EventEmitter();

var server = net.createServer(function(socket){
    socket.write('server is here\n');
    serverEmitter.on(broadcastName, onMessageReceived);

    var data = '';
    socket.on('data', (chunk)=>{
        data += chunk.toString('utf8');
        if(data.endsWith('\n')){
            serverEmitter.emit(broadcastName, {
                data: data,
                address: socket.remoteAddress
            });
            process.stdout.write(socket.remoteAddress + ': ' + data);
            data='';
        }
        //console.log(chunk.toString('utf8'));
    });

    socket.on('end', function(){
        serverEmitter.removeListener(broadcastName, onMessageReceived);
        console.log('someone left the session');
    });

    function onMessageReceived(data) {
        if(socket.remoteAddress === data.address){
            return;
        }
        socket.write(data.address + ': ' + data.data);
    }
});

server.listen(3001);

