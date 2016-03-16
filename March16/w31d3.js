/**
 * Created by kris on 3/16/16.
 */

var express = require('express');
var fs = require('fs');

var transactions = [];
var testData2 = {};


var bodyParser = require('body-parser');
var app = express();

// Port
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


fs.readFile('mock_data.json', 'utf8', (errors, jsonFile)=>{
    transactions = JSON.parse(jsonFile);
    console.log(jsonFile);
});

fs.readFile('mock_data2.json', 'utf8', (errors, jsonFile)=>{
    testData2 = JSON.parse(jsonFile);
});

// ROUTES for API
//======================================================================
var router = express.Router();

router.get('/transaction/:id', (req, res)=>{
    console.log(req.params.id);
    //res.json(transactions[req.params.id]);

    var id = req.params.id;

    for(var i = 0; i < transactions.length; i++) {
        if (id == transactions[i].id) {
            res.json(transactions[i]);
            break;
        }
    }

    res.send('Not Found');
});

router.get('/test/:id', (req, res)=>{
    var id = req.params.id;

    res.json(testData2[id] || 'Cannot find transaction: '+id);

});


// REGISTER ROUTES
app.use('/api', router);


// START SERVER
//=======================================================================
app.listen(port);