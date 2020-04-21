const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventname: {
        type: String,
        required: true,
    },
    description:  {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    additional: {
        type: String
    }
})

const Event = mongoose.model('events', eventSchema)

module.exports = Event;