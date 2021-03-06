import axios from 'axios';
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_LOGOUT
} from '../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        });

        const config = {
            headers: {
                'Content-Type': "application/json",
            },
        }

        const {
            data
        } = await axios.post('http://localhost:5000/api/user/login', {
            email,
            password
        }, config);

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        }); //Calls user login reducer with USER_LOGIN_SUCCESS type

        localStorage.setItem('userInfo', JSON.stringify(data)); //saves to local storage
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message
        })
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({
        type: USER_LOGIN_LOGOUT
    })
};