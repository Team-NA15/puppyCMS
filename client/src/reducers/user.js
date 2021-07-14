import { createActions, createReducer } from 'reduxsauce'; 
import Immutable from 'seamless-immutable'; 

const { Types, Creators } = createActions({
    actionSignInRequest: ['signInRequest'],
    actionSignInFailure: ["signInFailure"],
    actionSignInSuccess: ["signInSuccess"], 
    actionSetApiToken: ['setApiToken'], 
    actionSignOutRequest:['signOutRequest'],
}); 

export const ActionTypes = Types; 

export default Creators; 

export const INITIAL_STATE = Immutable({
    signInSuccess: null,
    signInFailure: null,
    signInFetching: null,
    signedIn: false,
    access_token: null,
}); 

export const actionSignInRequest = state => {
    return state.merge({
        signInFetching: true,
        signInSuccess: null,
        signInFailure: null,
    }); 
}
    

export const actionSignInSuccess = (state, { signInSuccess }) =>
    state.merge({
        signInFetching: false,
        signInFailure: null,
        signInSuccess: true,
        signedIn: true,
    });

export const actionSignInFailure = (state, { signInFailure }) =>
    state.merge({
        signInSuccess: false,
        signInFetching: false, 
        signInFailure 
    });

export const actionSetApiToken = (state, {setApiToken}) => state.merge({access_token: setApiToken}); 

export const actionSignOutRequest = state => state;

export const reducer = createReducer(INITIAL_STATE, {
    [Types.ACTION_SIGN_IN_REQUEST]: actionSignInRequest, 
    [Types.ACTION_SIGN_IN_SUCCESS]: actionSignInSuccess,
    [Types.ACTION_SIGN_IN_FAILURE]: actionSignInFailure,
    [Types.ACTION_SET_API_TOKEN]: actionSetApiToken,
    [Types.ACTION_SIGN_OUT_REQUEST]: actionSignOutRequest,
}); 