import axios from 'axios';

import {
    GET_USER,
    USER_ERROR
} from './types';

// Get current user's workouts
export const getUser = () => async dispatch => {
    try {
        const res = await axios.get('/api/workouts/me');
        console.log(res)
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