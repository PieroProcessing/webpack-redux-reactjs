import { defaultState } from '../defaultState';
import { LIST } from '../constants/list';

const initialState = defaultState().list;

export function listReducer(state = initialState, action) {
    switch (action.type) {
        case LIST.INIT_LIST:
            return action.payload;
        case LIST.RESET_LIST:
            return initialState;
        default:
            return state;
    }
}