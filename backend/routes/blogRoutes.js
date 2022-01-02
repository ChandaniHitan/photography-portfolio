const express = require ('express');

const router = express.Router();

//Middleware

const {protect, admin} = require ("../middleware/authMiddleware");

//Controllers
const {
    createBlog, 
    getAllBlogs, 
    getBlogById, 
    deleteBlog, 
    updateBlog
} = require('../controllers/blogControllers');

//Routes
router
    .route('/')
    .post(protect, admin, createBlog)
    .get(getAllBlogs);

router
    .route('/:id') 
    .put(protect, admin, updateBlog)
    .get(getBlogById)
    .delete(protect, admin, deleteBlog)   

 module.exports = router;   