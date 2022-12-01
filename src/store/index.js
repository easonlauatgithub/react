import {createStore, combineReducers, applyMiddleware} from 'redux';
import todoReducer from '../reducer/todolist';
import todoReducer2 from '../reducer/todolist2';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

// const rootReducer = combineReducers({
//     todoReducer,
//     todoReducer2,
// });
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    todoReducer,
    applyMiddleware(sagaMiddleware, logger),
    // applyMiddleware(logger),
);

sagaMiddleware.run(rootSaga);

export default store;