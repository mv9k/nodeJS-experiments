/**
 * Created by kris on 3/9/16.
 */

var fs = require('fs');

var readerStream = fs.createReadStream('March09/input.txt');
var writerStream = fs.createWriteStream('March09/output.txt');

var data = '';
/////////////////////////////////////////

readerStream.on('data', function(chunk){

    data += chunk;
    writerStream.write(chunk);

});

readerStream.on('end', ()=>{
    console.log(data);
    // VERY IMPORTANT to end write to flush data out of the buffer, and write the full data to file.
    writerStream.end();
});

writerStream.on('finish', ()=>{
    console.log('writer end');
});

