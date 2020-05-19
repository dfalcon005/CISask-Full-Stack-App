const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:  {
        type: String,
        required: true
    },
    userPosted: {
        type: String,
    },
    datePosted: {
        type: Date,
        required: true,
        default: Date.now()
    },
    course: {
        type: String,
        default: ''
    },
    professor: {
        type: String,
        default: ''
    },
    post: {
        type: String,
        required: true
    },
    comments:
        [{
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
        default: 0
    }
})

const Post = mongoose.model('posts', postSchema)

module.exports = Post;