var Algorithm = require('./models/algo');

module.exports = function(app) {
    app.get('/api/algos', function(req, res) {
        Algorithm.find(function(err, algos) {
            if (err)
                res.send(err);

            res.json(algos);
        });
    });

    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html');
    });
};