const express = require ('express');

const router = express.Router();

//Middleware

const {protect, admin} = require ("../middleware/authMiddleware"); 

//Controllers

const {
    postImage,
    getAllImages,
    getImageById,
    deleteImage,
    updateImage
} = require('../controllers/imageControllers');

//Routes

router
    .route('/') 
    .post(protect, admin, postImage)
    .get(getAllImages);

router
    .route('/:id')
    .put(protect, admin, updateImage)
    .get(getImageById)
    .delete(protect, admin, deleteImage);    

module.exports = router;    