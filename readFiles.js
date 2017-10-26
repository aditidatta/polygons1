var fs = require('fs');
var path = require('path');
var filename = path.basename(__filename);

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

if (process.argv.length < 3){
    console.log("The format must be \'node "+filename+" <folder>\' and the folder should be under /public/views/");
    process.exit(1);    
}

readFiles('public/views/'+process.argv[2]+'/', function(fname, content) {
    //console.log(content);
    var title = content.match(/<h1>(.*?)<\/h1>/g).map(function(str) {
        return str.replace(/<\/?h1>/g, '');
    });
    var res = title[0] + ', , '+process.argv[2]+', ' + fname + '\n';
    fs.appendFile(process.argv[2]+'.txt', res, function(err) {
        if (err) throw err;
        console.log('Saved!');
    });
}, function(err) {
    throw err;
});

