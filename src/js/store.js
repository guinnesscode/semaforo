import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'reducers/SemaforoReducers';

const buildStore = () => createStore(
    rootReducer,
    {},
    applyMiddleware(thunkMiddleware),
);

const store = buildStore();

export default store;
