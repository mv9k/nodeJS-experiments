/**
 * Created by kris on 3/10/16.
 */

var fs = require('fs');

var read = fs.readFile('March10/data.json', 'utf8', (errors, jsonFile)=>{
    console.log(jsonFile);
});

fs.stat('March10/data.json', (error, stats) =>{
    if(stats) {
        console.log('file exists');
    }
    else {
        console.log('file doesn\'t exist');
    }
});






