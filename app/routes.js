var Article = require('./models/article');

module.exports = function(app) {
    app.get('/api/articles', function(req, res) {
        var q = req.query;
        console.log(q);
        Article.find(function(err, articles) {
            if (err)
                res.send(err);
            //console.log(articles);
            res.json(articles);
        });
    });

    app.get('/api/search', function(req, res) {
        //console.log(req.query.q);
        var q = req.query.q.replace(/\+/g, ' ');
        //console.log(q);
        Article.find({ "$text": { "$search": q } }, function(err, articles) {
            if (err) {
                res.send(err);
            }
            //console.log(articles);
            res.json(articles);
        });
    });

    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });
};