const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    category: String,
    date: String,
    goalAmount: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

module.exports = mongoose.model("Project", projectSchema)