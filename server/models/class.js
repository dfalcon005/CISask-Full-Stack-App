const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    coursenumber: {
        type: String,
        required: true,
    },
    description:  {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    professor: [
        {
            firstname: String,
            lastname: String
        }
    ]
})

const Class = mongoose.model('classes', classSchema)

module.exports = Class;