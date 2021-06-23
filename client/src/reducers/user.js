import { GET_USER, USER_ERROR, 
        CLEAR_USER, UPDATE_USER, GET_USERS } from "../actions/types";

const initialState = {
    user: null,
    users: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_USER:
        //case UPDATE_USER:
            return {
                ...state,
                user: payload,
                loading: false
            };
        /*case GET_USERS:
            return {
                ...state,
                users: payload,
                loading: false
            };*/
        case USER_ERROR:
            return {
                ...state,
                user: null,
                error: payload,
                loading: false
            };
        case CLEAR_USER:
            return {
                ...state,
                user: null,
                loading: false
            };
        default:
            return state;
    };

};