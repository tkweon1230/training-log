import axios from 'axios';
import {
    GET_WORKOUT,
    WORKOUT_ERROR
} from './types';

// Create or update workout
export const createWorkout = (formData, history, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('/api/workouts', formData, config);
        console.log("Here")
        dispatch({
            type: GET_WORKOUT,
            payload: res.data
        });

        dispatch('Workout Created');

        history.push('/dashboard');
        

    } catch (err) {
        
        dispatch({
            type: WORKOUT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
        
    }
}