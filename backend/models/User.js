const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Create user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false,
    }
}, {timestamps:true});


//Password match
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}
userSchema.pre('save', async function(next) {
    // only hash the password if it has been modified (or is new)
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10); //generate a salt
    this.password = await bcrypt.hash(this.password, salt);
})

module.exports = User = mongoose.model('User', userSchema); //used in controller