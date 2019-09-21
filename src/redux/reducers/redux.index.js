// configuration
import {combineReducers } from 'redux';
// reducers list
// import {nameReducer} from './reducers/name.reducer';
import { listReducer } from './list.reducer';
import { authenticationReducer } from './auth.reducer';
import { searchReducer } from './search.reducer';

const appReducer = combineReducers({
    // name: nameReducer,
    auth: authenticationReducer,
    list: listReducer,
    search: searchReducer,
});

const RootReducer = (state, action) => {
    // console.log('state root', state);
    // console.log('action', action);

    if (action.type == 'RESET_STORE')
        state = undefined;
    return appReducer(state, action);
};

export default RootReducer;
// const createStoreWithMiddleware = applyMiddleware(
//     middlewareFactory
// )(createStore);

// export const store = createStoreWithMiddleware(RootReducer, initialState);

