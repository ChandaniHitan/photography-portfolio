import {combineReducers} from 'redux';

import {userLoginReducer} from './userReducers';

import {
    GetBlogsReducer,
    GetBlogDetailsReducer,
    CreateBlogReducer,
    UpdateBlogReducer,
    DeleteBlogReducer
} from './blogReducers';

import {
    GetImagesReducer,
    GetImageDetailsReducer,
    PostImageReducer,
    UpdateImageReducer,
    DeleteImageReducer
} from './imageReducers';

export default combineReducers ({
    userLogin: userLoginReducer,

    blogs: GetBlogsReducer,
    blogDetail: GetBlogDetailsReducer,
    createBlog: CreateBlogReducer,
    updateBlog: UpdateBlogReducer,
    deleteBlog: DeleteBlogReducer,

    images: GetImagesReducer,
    imageDetail: GetImageDetailsReducer,
    postImage: PostImageReducer,
    updateImage: UpdateImageReducer,
    deleteImage: DeleteImageReducer
});