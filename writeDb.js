var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost/polygons1';
var fs = require('fs');

var insertDocuments = function(db, data, count, callback) {
    db.collection('articles').insertMany(data).then(function(result) {
        assert.equal(count, result.insertedCount);
        console.log("Insert: Done..");
        callback();
    });
};


MongoClient.connect(url, function(err, db) {
    fs.readFile('test.txt', 'utf-8', function(err, content) {
        if (err) {
            throw err;
            return;
        }
        var data = [];
        var lines = content.split('\n');
        for (var i = 0; i < lines.length; i++) {
            var arr = lines[i].split(", ");
            //console.log(arr[1]);
            if(arr.length == 4){
	        var title = arr[0];
                var kw = arr[1];
                var type = arr[2];
                var fname = arr[3];
                data.push({
                    "title": title,
                    "keywords": kw,
                    "type": type,
                    "fname": fname
                });
            }
        }
        insertDocuments(db, data, data.length, function() {
            db.close();
            console.log("connection closed..");
        });
    });
});
