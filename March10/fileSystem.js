/**
 * Created by kris on 3/10/16.
 */

var fs = require('fs');

var read = fs.readFile('March10/data.json', 'utf8', (errors, jsonFile)=>{
    console.log(jsonFile);

    var fileData = JSON.parse(jsonFile);
    console.log(fileData.name, ':');
    console.log('"', fileData.message, '"');
});

var write = fs.writeFile('March10/message.txt', 'new message!', 'utf8', ()=>{
    console.log('writing new file!');
});

fs.stat('March10/data.json', (error, stats) =>{
    if(stats) {
        console.log('file exists');
    }
    else {
        console.log('file doesn\'t exist');
    }
});

fs.appendFile('March10/message.txt', '\nThis is the appended line!', ()=>{
    console.log('appended to message.txt!');
});








