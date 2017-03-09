import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

/*
const buildStore = () => createStore(
    rootReducer,
    {},
    applyMiddleware(thunkMiddleware),
);

const store = buildStore();
*/
const store = createStore(state => state);
export default store;
