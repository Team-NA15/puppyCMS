import createSagaMiddleware from 'redux-saga'; 
import {applyMiddleware, createStore} from 'redux'; 


export default (rootReducer, rootSaga) => {
    const sagaMiddleware = createSagaMiddleware(); 
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));  

    const sagaManager = sagaMiddleware.run(rootSaga); 

    return{
        store, 
        sagaManager, 
        sagaMiddleware
    }
}