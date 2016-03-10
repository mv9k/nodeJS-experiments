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

fs.readFile('March10/data.json', 'utf8', (errors, jsonFile)=>{
    var transferData = JSON.parse(jsonFile);
    fs.appendFile('March10/message.txt', '\nName of user: '+transferData.name+ '\nMessage of user: '+transferData.message);
});

// Creates a file

//fs.writeFile(
//    'March10/readOnly.txt',
//    'Can\'t change me!',
//    {
//        encoding: 'utf8',
//        flag: 'w'
//
//    },
//    ()=>{console.log('created a file!')}
//);

// Sets file to read-only

//fs.chmod(
//    'March10/readOnly.txt',
//    '0o44',
//    ()=>{console.log('set file to read-only');}
//);



// read-only file

fs.chmod(
    'March10/readOnly.txt',
    0o444,
    ()=>{
        fs.writeFile('March10/readOnly.txt', 'Add something to this read-only file!', (error)=>{
            console.log('attempted to append to read-only file!');
            console.log(error);

            if(error) {
                fs.chmod(
                    'March10/readOnly.txt',
                    0o666,
                    ()=>{
                        fs.appendFile('March10/readOnly.txt', '\nAdded content', (error)=>{
                            console.log(error);
                            console.log('added content to file');
                        })
                    }
                )
            }
        });
    }
);







