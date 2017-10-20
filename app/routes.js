var Algorithm = require('./models/algo');

module.exports = function(app) {
    app.get('/api/algos', function(req, res) {
        console.log('in routes()');
        Algorithm.find(function(err, algos) {
            if (err)
                res.send(err);
            console.log('in get()');
            console.log(algos);
            res.json(algos);
        });
    });

    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });
};