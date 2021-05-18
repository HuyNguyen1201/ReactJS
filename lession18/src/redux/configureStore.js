import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './../reducers/index';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './../sagas/index';


const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({
            shouldHotReload: false
        }) : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();


const configureStore = () => {
    const middelwares = [thunk, sagaMiddleware];
    const enhancers = [
        applyMiddleware(...middelwares)
    ];
    const store = createStore(rootReducer, composeEnhancers(...enhancers));
    sagaMiddleware.run(rootSaga);
    return store;
};


export default configureStore;