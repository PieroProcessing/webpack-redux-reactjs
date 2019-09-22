import { defaultState } from '../defaultState';
import { TODOS } from '../constants/todos';

const initialState = defaultState().todos;

export function todosReducer(state = initialState, action) {
    switch (action.type) {
    case TODOS.INIT_TODOS:
        return action.payload;
    case TODOS.RESET_TODOS:
        return initialState;
    default:
        return state;
    }
}