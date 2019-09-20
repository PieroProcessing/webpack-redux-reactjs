import { createStore, compose } from "redux";
import { autoRehydrate, persistStore, persistReducer } from 'redux-persist'

import rootReducer from "./reducers/redux.index";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'defaultState',
  storage,
  whitelist: ['auth'],
  debug: false,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export default () => {
  let store = createStore(
    persistedReducer, /* middleware, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
  );
  let persistor = persistStore(store)
  return { store, persistor }
}