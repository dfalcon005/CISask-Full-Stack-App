//bring in dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const mongoose = require('mongoose')

//set up express app
const app = express()

//connect to DB with mongoose
mongoose.connect('mongodb+srv://user:12345@cis4339-watty.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
})

//middleware
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())

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