var mongoose = require('mongoose');

module.exports = mongoose.model('Article', {
    title: {
        type: String,
        default: 'Article 1'
    },
    keywords: String,
    type: String,
    fname: String
});
