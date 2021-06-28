import { GET_WORKOUT, WORKOUT_ERROR, CLEAR_WORKOUT, WORKOUT_LOADED} from "../actions/types";

const initialState = {
    workout: null,
    workouts: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
const { type, payload } = action;

switch(type) {
    case GET_WORKOUT:
    case WORKOUT_LOADED:
    //case UPDATE_WORKOUT:
        return {
            ...state,
            workout: payload,
            loading: false
        };
    /*case GET_WORKOUTS:
        return {
            ...state,
            workouts: payload,
            loading: false
        };*/
    case WORKOUT_ERROR:
        return {
            ...state,
            workout: null,
            error: payload,
            loading: false
        };
    case CLEAR_WORKOUT:
        return {
            ...state,
            workout: null,
            loading: false
        };
    default:
        return state;
};

};