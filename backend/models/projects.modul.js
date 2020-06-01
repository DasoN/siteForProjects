const mongoose = require('mongoose')

const Schema = mongoose.Schema

const projectsList = new Schema({
    title:{
        type: String,
        required: true,
    },
    minDesc: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
})

const User = mongoose.model('projects', projectsList)

module.exports = User