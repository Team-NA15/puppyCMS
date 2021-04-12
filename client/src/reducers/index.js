import {combineReducers} from 'redux'; 
import createStore from './createStore';  
import {INITIAL_STATE} from './reducers'; 

import rootSaga from '../sagas/saga'; 

export const reducers = combineReducers({
    session: require("./reducers").reducer,
    // continue list
});

export default () => {
    const rootReducer = (state, action) => {
        if (action.type === "ACTION_SIGN_OUT_REQUEST") {
            return reducers(
                {
                    session: INITIAL_STATE, 
                },
                action
            );
        }
        return reducers(state, action); 
    }; 

    const {store, sagaManager, sagaMiddleware} = createStore(rootReducer, rootSaga); 

    // let mutableSagaManager = sagaManager; 

    // if (module.hot) {
    //     module.hot.accept(() => {
    //         const nextRootReducer = require("./").reducers;
    //         store.replaceReducer(nextRootReducer);

    //         const newYieldSagas = require("../sagas/saga").default;
    //         mutableSagaManager.cancel();
    //         sagaManager.done.then(() => {
    //             mutableSagaManager = sagaMiddleware.run(newYieldSagas);
    //         });
    //     });
    // }
    return { store };
}