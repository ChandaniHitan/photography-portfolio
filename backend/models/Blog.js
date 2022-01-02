const mongoose = require('mongoose');

//Create blog schema
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

module.exports = Blog = mongoose.model('Blog', blogSchema);