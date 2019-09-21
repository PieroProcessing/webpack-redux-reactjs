import { SEARCH } from '../constants/search';
import { defaultState } from '../defaultState';

const initialState = defaultState().search;

export function searchReducer(state= initialState, action){
    switch (action.type) {
    case SEARCH.UDPDATE_SEARCH:
        return action.payload;
    case SEARCH.RESET_SEARCH:
        return initialState;
    default:
        return state;
    }
}