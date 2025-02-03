const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/project-b')

const userSchema = mongoose.Schema({
    fullName: String,
    bio: String,
    tags: [{ type: String }],
    region: String,
    city: String,
    image: String,
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
        default: []
    }],
    saved: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
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

module.exports = mongoose.model('User', userSchema)