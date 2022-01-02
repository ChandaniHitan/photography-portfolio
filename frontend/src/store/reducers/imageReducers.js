import {
    POST_IMAGE_REQUEST,
    POST_IMAGE_SUCCESS,
    POST_IMAGE_FAILURE,
    POST_IMAGE_RESET,
    UPDATE_IMAGE_REQUEST,
    UPDATE_IMAGE_SUCCESS,
    UPDATE_IMAGE_FAILURE,
    UPDATE_IMAGE_RESET,
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

//A reducer takes initial state and actions as arguments

export const GetImagesReducer = (
    state = {
        images: []
    },
    action
) => {
    switch (action.type) {
        case GET_IMAGES_REQUEST:
            return {
                loading: true,
                images: []
            }
        case GET_IMAGES_SUCCESS:
            return {
                loading: false,
                images: action.payload.images,
                pages: action.payload.pages,
                page: action.payload.page
            }
        case GET_IMAGES_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export const GetImageDetailsReducer = (
    state = {
        image: {}
    },
    action
) => {
    switch (action.type) {
        case GET_IMAGE_DETAILS_REQUEST:
            return {
                loading: true,
                ...state
            }
        case GET_IMAGE_DETAILS_SUCCESS:
            return {
                loading: false,
                image: action.payload,
                success: true
            }
        case GET_IMAGE_DETAILS_FAILURE:
            return {
                loading: false,
                error: action.payload
            }        
        default:
            return state;
    }
}

export const PostImageReducer = (
    state = {
        image: {}
    },
    action
) => {
    switch (action.type) {
        case POST_IMAGE_REQUEST:
            return {
                loading: true,
                image: {}
            }
        case POST_IMAGE_SUCCESS:
            return {
                loading: false,
                image: action.payload,
                success: true
            } 
        case POST_IMAGE_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        case POST_IMAGE_RESET:
            return {}           
        default:
            return state;
    }
}

export const UpdateImageReducer = (
    state = {
        image: {}
    },
    action
) => {
    switch (action.type) {
        case UPDATE_IMAGE_REQUEST:
            return {
                loading: true,
                image: {}
            }
        case UPDATE_IMAGE_SUCCESS:
            return {
                loading: false,
                image: action.payload,
                success: true
            }
        case UPDATE_IMAGE_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        case UPDATE_IMAGE_RESET:
            return {
                image: {}
            }            
            
        default:
            return state;
    }
}

export const DeleteImageReducer = (
    state = {},
    action
) => {
    switch (action.type) {
        case DELETE_IMAGE_REQUEST:
            return {
                loading: true
            }
        case DELETE_IMAGE_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case DELETE_IMAGE_FAILURE:
            return {
                loading: false,
                error: action.payload
            }        
    
        default:
            return state;
    }
}