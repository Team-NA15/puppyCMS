import createSagaMiddleware from 'redux-saga'; 
import { applyMiddleware, createStore } from 'redux'; 
import storage from 'redux-persist/lib/storage'; 
import { persistStore, persistReducer } from 'redux-persist'; 
import { seamlessImmutableReconciler, seamlessImmutableTransformCreator } from 'redux-persist-seamless-immutable'; 
import { apply } from '@redux-saga/core/effects';

export default (rootReducer, rootSaga) => {
    const sagaMiddleware = createSagaMiddleware(); 

    const transformConfig = {
        whiteListPerReducer: {
            session: ['signInSuccess, signInFailure, signInRequest'], 
        }
    }

    const persistConfig = {
        key: 'root', 
        storage, 
        stateReconciler: seamlessImmutableReconciler, 
        transforms: [seamlessImmutableTransformCreator(transformConfig)]
    }
    const persistedReducer = persistReducer(persistConfig, rootReducer); 
    // const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
    const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));  

    const sagaManager = sagaMiddleware.run(rootSaga); 

    return{
        store, 
        sagaManager, 
        sagaMiddleware, 
        persister: persistStore(store)
    }
}