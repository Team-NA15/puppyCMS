import {combineReducers} from 'redux'; 
import createStore from './createStore';  
import INITIAL_STATE from './reducers'; 

import rootSaga from '../sagas/saga'; 

export const reducers = combineReducers({
    session: require("./reducers").reducer,
    // continue list
});

export default () => {
    const rootReducer = (state, action) => {
        if (action.type === "SIGN_OUT_REQUEST") {
            return reducers(
                {
                    session: INITIAL_STATE, 
                },
                action
            );
        }
        return reducers(state, action); 
    }; 

    const {store} = createStore(rootReducer, rootSaga); 

    return {store};
}