import {createStore, combineReducers} from 'redux';
import todoReducer from '../reducer/todolist';
import todoReducer2 from '../reducer/todolist2';

// const rootReducer = combineReducers({
//     todoReducer,
//     todoReducer2,
// });
const store = createStore(todoReducer);

export default store;