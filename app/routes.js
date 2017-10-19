var Article = require('./models/Article');

module.exports = function(app) {
    app.get('/api/articles', function(req, res) {
        Article.find(function(err, articles) {
            if (err)
                res.send(err);

            res.json(articles);
        });
    });

    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html');
    });
};