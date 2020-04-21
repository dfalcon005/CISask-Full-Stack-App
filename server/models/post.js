const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:  {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        required: true,
        default: Date.now()
    },
    class: {
        type: String,
        required: false,
        default: ''
    },
    professor: {
        type: String,
        required: false,
        default: ''
    },
    post: {
        type: String,
        required: true
    },
    comments:
        [{
            user: {
                type: String
            },
            commentdate:{
                type: Date,
                default: Date.now()
            },
            usercomment: {
                type: String
            }
        }],
    likes: {
        type: Number,
        required: false,
        default: 0
    }
})

const Post = mongoose.model('posts', postSchema)

module.exports = Post;