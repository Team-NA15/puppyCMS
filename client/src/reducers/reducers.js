import { createActions, createReducer } from "reduxsauce";
import Imutable from "seamless-immutable";

const {Types, Creators} = createActions({
    actionSignInRequest: ['signInRequest'],
    actionSignInFailure: ["signInFailure"],
    actionSignInSuccess: ["signInSuccess"], 
    actionSetApiToken: ['setApiToken'], 
}); 

export const ActionTypes = Types; 
export default Creators; 

export const INITIAL_STATE = Imutable({
    signInSuccess: null,
    signInFailure: null,
    signInFetching: false,
    signedIn: false,
});


export const actionSignInRequest = state => 
    state.merge({
        signInFetching: true,
        signInSuccess: null,
        signInFailure: null,
    }); 
    

export const actionSignInSuccess = (state, { signInSuccess }) =>
    state.merge({
        signInFetching: false,
        signInFailure: null,
        signInSuccess,
        signedIn: true,
    });
export const actionSignInFailure = (state, { signInFailure }) =>
    state.merge({ signInSuccess: null, signInFetching: false, signInFailure 
});

export const actionSetApiToken = state => state; 

export const reducer = createReducer(INITIAL_STATE, {
    [Types.ACTION_SIGN_IN_REQUEST]: actionSignInRequest, 
    [Types.ACTION_SIGN_IN_SUCCESS]: actionSignInSuccess,
    [Types.ACTION_SIGN_IN_FAILURE]: actionSignInFailure,
    [Types.ACTION_SET_API_TOKEN]: actionSetApiToken,

}); 