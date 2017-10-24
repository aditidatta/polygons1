var fs = require('fs');

function readFiles(dir, processContent, onError) {
    fs.readdir(dir, function(err, fnames) {
        if (err) {
            onError(err);
            return;
        }

        fnames.forEach(function(fname) {
            fs.readFile(dir + fname, 'utf-8', function(err, content) {
                if (err) {
                    onError(err);
                    return;
                }
                processContent(fname, content);
            });
        });
    });
}

readFiles('public/views/topics/', function(fname, content) {
    //console.log(content);
    var title = content.match(/<h1>(.*?)<\/h1>/g).map(function(str) {
        return str.replace(/<\/?h1>/g, '');
    });
    var res = title[0] + ', , topic, ' + fname + '\n';
    fs.appendFile('test.txt', res, function(err) {
        if (err) throw err;
        console.log('Saved!');
    });
}, function(err) {
    throw err;
});

/*
console.log(arr);

function writeToFile(fname, data) {
    fs.writeFile(fname, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}

writeToFile("text.txt", arr);
*/