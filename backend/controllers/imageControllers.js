const asyncHandler = require('express-async-handler');
const Image = require('../models/Image');

//route POST/api/image
//description Add new image
//access Admin

const postImage = asyncHandler(async (req, res) => {
    //Create new image instance(obj) with default info
    //And saved to database
    const image = new Image({
        alt: "Sample Alt",
        src: "/uploads/sample.jpg",
        author: req.user._id,
    });
    const createdImage = await image.save();
    res.status(201).json(createdImage);
})

//route GET/api/images
//description Display all images
//access everyone

const getAllImages = asyncHandler(async (req, res) => {
    //Get all images from the database using find method
    //Display images in pages and set the number of images to be displayed
    const pageSize = Number(req.query.pageSize) || 10; //Pages size is the number of items in a page
    const pageNumber = Number(req.query.pageNumber) || 1; //Default page number will be 1

    const count = await Image.countDocuments(); //Find the number of images available

    const images = await Image.find()
        .limit(pageSize)
        .skip(pageSize * (pageNumber - 1)) //Eg. to go to page 3 (10 * (3-1)) will skip 20 images 

    res.json({
        images,
        pageNumber,
        pages: Math.ceil(count / pageSize)
    });
})

//route GET/api/image/:id
//description Display one image
//access Everyone


//Find image using id and display if there is image otherwise throw error
const getImageById = asyncHandler(async (req, res) => {
    const image = await Image.findById(req.params.id);
    if (image) {
        res.json(image);
    } else {
        res.status(404)
        throw new Error("Image not found!")
    }
})

//route PUT/api/image/
//description Update an image
//access Admin

const updateImage = asyncHandler(async (req, res) => {
    const {
        author,
        alt,
        src
    } = req.body;

    const image = await Image.findById(req.params.id);

    console.log("image", image);

    if (image) {
        image.author = author ? author : image.author;
        image.alt = alt ? alt : image.alt;
        image.src = src ? src : image.src;

        const updatedImage = await image.save();

        res.json(updatedImage);

    } else {
        res.status(404);
        throw new Error("Image not found!")
    }
})

//route DELETE/api/image
//description Delete an image
//access Admin

const deleteImage = asyncHandler(async (req, res) => {
    const image = await Image.findById(req.params.id);

    if (image) {
        await image.remove()
        res.json("Image Deleted")
    } else {
        res.status(404)
        throw new Error("Image not found")
    }
})

module.exports = {
    postImage,
    getAllImages,
    getImageById,
    deleteImage,
    updateImage
};