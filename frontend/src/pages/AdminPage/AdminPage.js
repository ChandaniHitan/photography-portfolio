import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../store/actions/userActions';
import AdminHeader from '../components/AdminHeader/AdminHeaderComponent';
import BlogsComponent from '../components/BlogsComponent';
import {getBlogs} from '../store/actions/blogActions';
import {POST_IMAGE_RESET} from '../store/constants/imageConstants';

import {
    getImages,
    postImage,
    deleteImage
} from '../store/actions/imageActions.js';

function AdminPage({history}) {
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const blogList = useSelector(state => state.blogs);
    const {blogs} = blogList;

    const imagePost = useSelector(state => state.postImage);
    const {image:postedImage, success:successPostImage} = imagePost;

    const imageList = useSelector(state => state.images);
    const {images: gallery} = imageList;

    const imageDelete = useSelector(state => state.deleteImage);
    const {loading:imageDeleteLoading, success:imageDeleteSuccess} = imageDelete; 


    useEffect(() => {
        dispatch({
            type: POST_IMAGE_RESET
        });
        if (!userInfo || !userInfo.isAdmin) {
            history.push('/login');
        }

        dispatch(getImages(null, 100));

        if(successPostImage) {
            history.push(`/admin/image/${postedImage._id}/edit`)
        }
    }, [dispatch, history, userInfo, successPostImage, postedImage]);

    const handleLogout = (e) =>{
        e.preventDefault();
        dispatch(logout());
        history.push('/login');
    }

    const uploadImage = (e) => {
        e.preventDefault();
        dispatch(postImage());
    }

    const uploadBlog = (e) => {

    }

    return ( 
        <div>
        <h1>Lucid Photography Admin</h1>
          
            {blogs.length !== 0 && blogs.map((item, idx)=>(
               <div key={idx}>
                   {item.content}
               </div> 
            ))}
            <button onClick={uploadBlog}>Upload new Blog</button>
            <button onClick={uploadImage}>Add new Image</button>
            <button onClick={handleLogout}>Sign Out</button>

        </div>
     );
}

export default AdminPage;