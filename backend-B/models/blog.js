const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title: String,
    caption: String,
    image: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    tags: [{ type: String }],
    saved: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: []
    }],
    liked: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
        default: []
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        default: []
    }]
});

module.exports = mongoose.model('Blog', blogSchema)