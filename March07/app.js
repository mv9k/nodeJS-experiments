/**
 * Created by kris on 3/7/16.
 */
//var testLib = require('./test.js');
//
//
//console.log('execute program');
//
//
//
//console.log(toUpper('string string string'));

//var _ = require("lodash");
//
//var users = [
//    {'user': 'fred', 'age': 40},
//    {'user': 'bill', 'age': 23},
//    {'user': 'sally', 'age': 69},
//    {'user': 'karen', 'age': 123}
//];
//
//console.log(_.orderBy(users, ['user', 'age']));

var http = require('http');
var _ = require('lodash');
var argv = require('minimist')(process.argv.slice(2));
var inputs = argv._;

console.dir(argv);

var evens = _.filter(inputs, function(input){
    return input % 2 == 0;
});

var odds = _.filter(inputs, function(input){
    return input % 2 > 0;
});

console.log(evens);
console.log(odds);

console.log('sum of evens: ' + _.sum(evens));
console.log('average of odds: ' + _.mean(odds));

var server = http.createServer(function(req, res){
    //debugger;
    if (_.startsWith(req.url, '/path/something')) {
        res.write('<h1>' + req.url + '</h1>')
    }
    else {
        res.write('<h1>Hellow World</h1>');
    }
    res.end();


    //res.write('response: hello world');
    //res.end();
});

server.listen(3000, function(){
    console.log('server is ready');
});

