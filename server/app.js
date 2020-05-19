//bring in dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const mongoose = require('mongoose')
const passport = require('passport')

//set up express app
const app = express()

//middleware
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())

// Use the passport Middleware
app.use(passport.initialize());
// Bring in the Passport Strategy
require('./config/passport')(passport);

//connect to DB with mongoose
const db = require('./config/keys').mongoURI;
mongoose.connect(db, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Datebase connected!")
}).catch(err => {
    console.log("Cannot connect to database!")
})

//initial routes
const classes = require('./routes/api/classes')
const events = require('./routes/api/events')
const faqs = require('./routes/api/faqs')
const posts = require('./routes/api/posts')
const users = require('./routes/api/users')
app.use('/classes', classes)
app.use('/events', events)
app.use('/faqs', faqs)
app.use('/posts', posts)
app.use('/users', users)

//listen for requests
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`))