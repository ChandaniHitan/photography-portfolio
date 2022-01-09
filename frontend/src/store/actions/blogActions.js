import axios from 'axios';
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

export const getBlogs = (pageNumber = "", pageSize = "") => async (dispatch) => {
    try {
        dispatch({
            type: GET_BLOGS_REQUEST
        });
        const {
            data
        } = await axios.get(
            `http://localhost:5000/api/blog?pageNumger=${pageNumber}&pageSize=${pageSize}`
        );
        dispatch({
            type: GET_BLOGS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: GET_BLOGS_FAILURE,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
};

export const getBlogDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_BLOG_DETAILS_REQUEST
        });
        const { data } = await axios.get(`http://localhost:5000/api/blog/:${id}`);
        dispatch({
            type: GET_BLOG_DETAILS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: GET_BLOG_DETAILS_FAILURE,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        });
    }
};

export const createBlog = (blog) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_BLOG_REQUEST
        });

        const state = getState();
        const userInfoState = state.userLogin.userInfo; //Check from store
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfoState.token}`
            }
        };
        const { data } = await axios.post("http://localhost:5000/api/blog", {blog}, config);
        dispatch({
            type: CREATE_BLOG_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_BLOG_FAILURE,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
};

export const updateBlog = (id) => async (dispatch, getState, blog) => {
    try {
        dispatch({
            type: UPDATE_BLOG_REQUEST,
        })
        const state = getState();
        const userInfoState = state.userLogin.userInfo;
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfoState.token}`
            }
        };
        const { data } = await axios.put(`http://localhost:5000/api/blog/:${id}`, { blog }, config);
        dispatch({
            type: UPDATE_BLOG_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_BLOG_FAILURE,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
};

export const deleteBlog = (id) => async (dispatch, getState, blog) => {
    try {
        dispatch({
            type: DELETE_BLOG_REQUEST,
        })
        const state = getState();
        const userInfoState = state.userLogin.userInfo;
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfoState.token}`
            }
        };
        const { data } = await axios.delete(`http://localhost:5000/api/blog/:${id}`, { blog }, config);
        dispatch({
            type: DELETE_BLOG_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DELETE_BLOG_FAILURE,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
};