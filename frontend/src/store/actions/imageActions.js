import axios from 'axios';
import {
    POST_IMAGE_REQUEST,
    POST_IMAGE_SUCCESS,
    POST_IMAGE_FAILURE,
    UPDATE_IMAGE_REQUEST,
    UPDATE_IMAGE_SUCCESS,
    UPDATE_IMAGE_FAILURE,
    DELETE_IMAGE_REQUEST,
    DELETE_IMAGE_SUCCESS,
    DELETE_IMAGE_FAILURE,
    GET_IMAGES_REQUEST,
    GET_IMAGES_SUCCESS,
    GET_IMAGES_FAILURE,
    GET_IMAGE_DETAILS_REQUEST,
    GET_IMAGE_DETAILS_SUCCESS,
    GET_IMAGE_DETAILS_FAILURE
} from "../constants/imageConstants";

export const getImages = (pageNumber = "", pageSize = "") => async (dispatch) => {
    try {
        dispatch({
            type: GET_IMAGES_REQUEST
        });
        const {
            data
        } = await axios.get(
            `http://localhost:5000/api/image?pageNumber=${pageNumber}&pageSize=${pageSize}`
        );
        dispatch({
            type: GET_IMAGES_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_IMAGES_FAILURE,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
};

export const getImageDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_IMAGE_DETAILS_REQUEST
        });
        const {
            data
        } = await axios.get(
            `http://localhost:5000/api/image/${id}`
        );
        dispatch({
            type: GET_IMAGE_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_IMAGE_DETAILS_FAILURE,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        });
    }
}

export const postImage = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: POST_IMAGE_REQUEST
        });

        const state = getState();
        const userInfoState = state.userLogin.userInfo; //Check from store
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfoState.token}`
            }
        };
        const {
            data
        } = await axios.post("http://localhost:5000/api/image", {}, config);
        dispatch({
            type: POST_IMAGE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: POST_IMAGE_FAILURE,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

export const updateImage = (image) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_IMAGE_REQUEST
        });
        const state = getState();
        const userInfoState = state.userLogin.userInfo;
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfoState.token}`
            }
        };
        const { data } = await axios.put(`http://localhost:5000/api/image/${image._id}`, image, config);
        dispatch({
            type: UPDATE_IMAGE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: UPDATE_IMAGE_FAILURE,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

export const deleteImage = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_IMAGE_REQUEST
        });
        const state = getState();
        const userInfoState = state.userLogin.userInfo;
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfoState.token}`
            }
        };
        const { data } = await axios.delete(`http://localhost:5000/api/image/${id}`, config);
        dispatch({
            type: DELETE_IMAGE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DELETE_IMAGE_FAILURE,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}