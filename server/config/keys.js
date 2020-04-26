if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: "mongodb+srv://user:12345@cis4339-watty.mongodb.net/test?retryWrites=true&w=majority",
        secret: 'yoursecret'
    };
} else {
    module.exports = {
        mongoURI: "mongodb+srv://user:12345@cis4339-watty.mongodb.net/test?retryWrites=true&w=majority",
        secret: 'yoursecret'
    };
}