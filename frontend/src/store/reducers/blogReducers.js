import {
    CREATE_BLOG_REQUEST,
    CREATE_BLOG_SUCCESS,
    CREATE_BLOG_FAILURE,
    UPDATE_BLOG_REQUEST,
    UPDATE_BLOG_SUCCESS,
    UPDATE_BLOG_FAILURE,
    DELETE_BLOG_REQUEST,
    DELETE_BLOG_SUCCESS,
    DELETE_BLOG_FAILURE,
    GET_BLOGS_REQUEST,
    GET_BLOGS_SUCCESS,
    GET_BLOGS_FAILURE,
    GET_BLOG_DETAILS_REQUEST,
    GET_BLOG_DETAILS_SUCCESS,
    GET_BLOG_DETAILS_FAILURE
} from "../constants/blogConstants";

//A reducer takes initial state and actions as arguments

export const GetBlogsReducer = (
    state = {
        blogs: []
    },
    action
) => {
    switch (action.type) {
        case GET_BLOGS_REQUEST:
            return {
                loading: true,
                blogs: []
            }
        case GET_BLOGS_SUCCESS:
            return {
                loading: false,
                blogs: action.payload.blogs,
                pages: action.payload.pages,
                page: action.payload.page
            }
        case GET_BLOGS_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const GetBlogDetailsReducer = (
    state = {
        blog: {}
    },
    action
) => {
    switch (action.type) {
        case GET_BLOG_DETAILS_REQUEST:
            return {
                loading: true,
                blog: {}
            }
        case GET_BLOG_DETAILS_SUCCESS:
            return {
                loading: false,
                blog: action.payload.blog //Check from blogControllers for the data
            }
        case GET_BLOG_DETAILS_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const CreateBlogReducer = (
    state = {
        blog: {}
    },
    action
) => {
    switch (action.type) {
        case CREATE_BLOG_REQUEST:
            return {
                loading: true,
                blog: {}
            }
        case CREATE_BLOG_SUCCESS:
            return {
                loading: false,
                blog: action.payload
            }
        case CREATE_BLOG_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const UpdateBlogReducer = (
    state = {
        blog: {}
    },
    action
) => {
    switch (action.type) {
        case UPDATE_BLOG_REQUEST:
            return {
                loading: true,
                blog: {}
            }
        case UPDATE_BLOG_SUCCESS:
            return {
                loading: false,
                blog: action.payload
            }
        case UPDATE_BLOG_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }

}

export const DeleteBlogReducer = (
    state = {
        blog: {}
    },
    action
) => {
    switch (action.type) {
        case DELETE_BLOG_REQUEST:
            return{
                loading: true,
                blog: {}
            }
        case DELETE_BLOG_SUCCESS:
            return{
                loading: false,
                blog: action.payload
            }    
        case DELETE_BLOG_FAILURE:
            return{
                loading: false,
                error: action.payload
            }    
        default:
            return state;
    }
}