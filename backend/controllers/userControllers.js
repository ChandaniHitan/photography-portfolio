const asyncHandler = require('express-async-handler');
const {generateToken} = require('../utils/generateToken');
const User = require('../models/User');

//route POST/api/user
//description User register and create token
//access Everyone

const registerUser = asyncHandler(async (req, res) => {
        const { name, email, password, isAdmin} = req.body;

        const userExists = await User.findOne({email});

        if(userExists){
            res.status(400);
            throw new Error('User already exists');
        }
        const user = await User.create({
            name,
            email,
            password,
            isAdmin: isAdmin && isAdmin,
        })
 
        if(user){
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            })
        } else {
            res.status(400);
            throw new Error('invalid user data');
        }


});


//route POST/api/user/login
//description User login and get user
//access everyone

const loginUser = asyncHandler(async (req,res) => {
    const {email, password } = req.body;
    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
})

//route GET/api/user
//description Display all users
//access Everyone

const getAllUsers = asyncHandler(async (req,res) => {
    const users = await User.find();
    res.json(users);
});


//route DELETE/api/user/:id
//description Delete user by id
//access admin

const deleteUser = asyncHandler(async (req,res) => {
    const user = await User.findById(req.params.id);

    if(user){
        await user.remove();
        res.json({message: "User is removed"})
    } else {
        res.status(404);
        throw new Error('User not found!');
    }
})

module.exports = {registerUser,loginUser,getAllUsers, deleteUser};

