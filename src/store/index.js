import {createStore, combineReducers, applyMiddleware} from 'redux';
import todoReducer from '../reducer/todolist';
import todoReducer2 from '../reducer/todolist2';
import logger from 'redux-logger';

// const rootReducer = combineReducers({
//     todoReducer,
//     todoReducer2,
// });
const store = createStore(
    todoReducer,
    applyMiddleware(logger),
);

export default store;