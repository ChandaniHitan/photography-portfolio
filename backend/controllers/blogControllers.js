const asyncHandler = require('express-async-handler');
const Blog = require ('../models/Blog');

//route POST/api/blog
//description Create new blog
//access everyone

const createBlog = asyncHandler(async(req, res) => {

    const blog = new Blog({
        title : "My Blog",
        image: "Some Image",
        description: "Blog about something",
        content: "Description about the blog",
    })
    
    const createdBlog = await blog.save();
    res.status(201).json(createdBlog);
});

//route GET/api/blogs
//description Display all blog
//access Everyone

const getAllBlogs = asyncHandler(async (req,res) => {
    const pageSize = Number(req.query.pageSize) || 10;
    const pageNumber = Number(req.query.pageNumber) || 1;

    const count = await Blog.countDocuments();

    const blogs = await Blog.find()
        .limit(pageSize)
        .skip(pageSize * (pageNumber - 1))

    res.json({blogs, pageNumber, pages: Math.ceil(count / pageSize)});
})


//route GET/api/blog/:id
//description Display one blog
//access Everyone


const getBlogById = asyncHandler(async (req, res) => {

    const blog = await Blog.findById(req.params.id);
    if(blog) {
    res.json(blog);
} else {
    res.status(404)
    throw new Error("Blog not found!")
    }
})

//route PUT/api/blog/
//description Update blog post
//access Admin

const updateBlog = asyncHandler(async(req, res) => {
    const { title, image, description, content} = req.body;

    const blog = await Blog.findById(req.params.id);

    if(blog){
        blog.title = title;
        blog.image = image;
        blog.description = description;
        blog.content = content;
    }

    const updatedBlog = await blog.save();

    res.status(201).json(updatedBlog);
})

//route DELETE/api/blog
//description Delete a blog
//access Admin

const deleteBlog = asyncHandler(async(req, res) => {
    const blog = await Blog.findById(req.params.id);

    if(blog){
        await blog.remove()
        res.json("Blog removed")
    } else {
        res.status(404)
        throw new Error("Blog not found")
    }
})

module.exports = {
    createBlog, 
    getAllBlogs, 
    getBlogById, 
    deleteBlog, 
    updateBlog
};

