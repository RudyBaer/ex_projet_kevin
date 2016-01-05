var express = require('express');
var bodyParser = require("body-parser");
var app = express();


var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/projetk');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies

app.use(function (req, res, next) {
    req.db = db;
    next();
});

app.get('/api/joke', function (req, res) {
    var db = req.db;
    var collection = db.get('jokes');
    collection.find({}, {}, function (e, docs) {
        res.json(docs);
    });
});


app.post('/api/joke', function (req, res) {
    var db = req.db;


    // Set our collection
    var collection = db.get('jokes');

    console.log(req.body);

    // Submit to the DB
    collection.insert(req.body, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.json(doc);
        }
    });
});


app.put('/api/joke', function (req, res) {
    var db = req.db;

    // Set our collection
    var collection = db.get('jokes');

    // Submit to the DB
    collection.updateById(req.body._id, req.body, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.json(doc);
        }
    });
});


app.use('/', express.static(__dirname + '/html/'));


var router = express.Router();

app.use('/api', router);

app.listen(3000);