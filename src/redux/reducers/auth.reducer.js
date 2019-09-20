import { AUTH } from '../constants/authentication';
import { defaultState } from '../defaultState';

const initialState = defaultState().auth;

export function authenticationReducer(state = initialState, action) {
    // console.log('state auth', state)
    // console.log('action auth', action)
    switch (action.type) {
        case AUTH.GET_TOKEN:
            return state.token;
        case AUTH.SET_USER_DATA:
            var newState = Object.assign({}, state, action.payload);
            return newState;
        case AUTH.RESET_AUTHENTICATION:
            return initialState;
        default:
            return state;
    }
} 