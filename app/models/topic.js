// app/models/topic.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our algo model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Topic', {
    name: {
        type: String,
        default: 'Topic 1'
    },
});