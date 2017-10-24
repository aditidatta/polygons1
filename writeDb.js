var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost/polygons1';

var insertDocument = function(db, title, kw, type, fname, callback) {
    db.collection('articles').insertOne({
        "title": title,
        "keywords": kw,
        "type": type,
        "fname": fname
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the restaurants collection.");
        callback();
    });
};