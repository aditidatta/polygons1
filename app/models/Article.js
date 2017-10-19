var mongoose = require('mongoose');

module.exports = mongoose.model('Article', {
    name: {
        type: String,
        default: 'Put an Article name here'
    },
    fname: {
        type: String,
        default: 'This is the article body.'
    }
});