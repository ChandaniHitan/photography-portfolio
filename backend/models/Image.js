const mongoose = require ('mongoose');

//Create image schema
const imageSchema = new mongoose.Schema({
    author:{
        type: String,
        require: true,
    },
    alt:{
        type: String,
        require: true,
    },
    src:{
        type: String,
        require: true
    }
}, {timestamps:true});

module.exports = Image = mongoose.model('Image', imageSchema);