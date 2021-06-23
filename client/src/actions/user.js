import axios from 'axios';

import {
    GET_USER,
    USER_ERROR
} from './types';

// Get user
export const getUser = () => async dispatch => {
    try {
        const res = await axios.get('/api/workouts/');

        dispatch({
            type: GET_USER,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: USER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
        
    }
}