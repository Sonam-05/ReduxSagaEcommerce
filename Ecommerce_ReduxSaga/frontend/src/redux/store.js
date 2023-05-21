import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import userSaga from './allReduxSaga/reduxSaga';
import productSaga from './allReduxSaga/productReduxSaga';
import categorySaga from './allReduxSaga/categoryReduxSaga';
import tagReduxSagaFunc from './allReduxSaga/tagReduxSaga';


const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer : rootReducer,
    middleware : () => [sagaMiddleware]
});

sagaMiddleware.run(userSaga);
sagaMiddleware.run(productSaga);
sagaMiddleware.run(categorySaga);
sagaMiddleware.run(tagReduxSagaFunc)

export default store;