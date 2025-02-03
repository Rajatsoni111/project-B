const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    content: String,
    reply: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    },
    time:{
        type: Date,
        default: Date.now
    },
    likedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: []
    }]
});

module.exports = mongoose.model('Comment', commentSchema)