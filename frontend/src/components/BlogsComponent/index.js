import React, { useState, useEffect } from 'react';
import { CreateArea } from './StyledBlogComponent';
import { createBlog, updateBlog }  from '../../store/actions/blogActions';
import { useDispatch, useSelector } from 'react-redux';

function BlogsComponent(props) {

const [blogTitle, setBlogTitle] = useState("");
const [blogContent, setBlogContent] = useState("");
const dispatch = useDispatch();

useEffect(() => {
    dispatch(createBlog());
}, [dispatch])

const createdBlog = useSelector(state => state.createBlog);
const {blog} = createdBlog;


    const handleTitleChanged = (e) => {
        const title = e.target.value;
        setBlogTitle(title);
    }

    const handleContentChanged = (e) => {
        const content = e.target.value;
        setBlogContent(content);
    }

    const handleSubmit = (e) => {
        const newBlog = {
            title: blogTitle,
            image: "",
            description: "",
            content: blogContent
        }

        dispatch(updateBlog(newBlog));
    }
    return (  
        <CreateArea>
        {blog && <form onSubmit={handleSubmit}>
            <input
                name="title"
                type="text"
                placeholder={blog.title}
                onChange = {handleTitleChanged}

            />
            <textarea
                name="content"
                type="text"
                placeholder={blog.content}
                rows="3"
                onChange = {handleContentChanged}
            ></textarea>
            <input
                type="submit"
                value="Create new blog"
            />
           </form>} 
        </CreateArea>
    );
}

export default BlogsComponent;