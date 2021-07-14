import {combineReducers} from 'redux'; 
import createStore from './createStore';  
import {INITIAL_STATE} from './reducers';

import { INITIAL_STATE as SessionInitialState } from './session';
import { INITIAL_STATE as UserInitialState } from './user';
import { INITIAL_STATE as AppointmentsInitialState } from './appointments';
import { INITIAL_STATE as DogsInitialState } from './dogs';

import rootSaga from '../sagas/saga'; 

export const reducers = combineReducers({
    // session: require("./reducers").reducer,
    session: require('./session').reducer, 
    // user: require('./user').reducer, 
    appointments: require('./appointments').reducer, 
    dogs: require('./dogs').reducer, 
    // continue list
});

export default () => {
    const rootReducer = (state, action) => {
        if (action.type === "ACTION_SIGN_OUT_REQUEST") {
            return reducers(
                {
                    session: SessionInitialState, 
                    // user: UserInitialState, 
                    appointments: AppointmentsInitialState, 
                    dogs: DogsInitialState, 
                },
                action
            );
        }
        return reducers(state, action); 
    }; 

    const {store, sagaManager, sagaMiddleware, persister } = createStore(rootReducer, rootSaga); 

    let mutableSagaManager = sagaManager; 

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require("./").reducers;
            store.replaceReducer(nextRootReducer);

            const newYieldSagas = require("../sagas/saga").default;
            mutableSagaManager.cancel();
            sagaManager.done.then(() => {
                mutableSagaManager = sagaMiddleware.run(newYieldSagas);
            });
        });
    }
    return { store, persister };
}