import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import workout from './workout';

export default combineReducers({
    auth,
    user,
    workout
});