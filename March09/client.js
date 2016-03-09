/**
 * Created by kris on 3/9/16.
 */

var net = require('net');

var client = new net.Socket();
client.connect(3001, "127.0.0.1", function(){
    console.log('connected');
    process.stdin.setEncoding('utf8');
    process.stdin.on('readable', function(){
        var chunk = process.stdin.read();
        if (chunk != null) {
            client.write(chunk);
        }
    });
});


