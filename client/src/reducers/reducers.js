import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

const {Types, Creators} = createActions({
    actionSignInRequest: ['signInRequest'],
    actionSignInFailure: ["signInFailure"],
    actionSignInSuccess: ["signInSuccess"], 
    actionSetApiToken: ['setApiToken'], 
    actionSignOutRequest:['signOutRequest'], 
    actionGetTodaysAppointmentsRequest:['getTodaysAppointmentsRequest'], 
    actionGetTodaysAppointmentsSuccess: ['getTodaysAppointmentsSuccess'], 
    actionGetTodaysAppointmentsFailure: ['getTodaysAppointmentsFailure'], 
}); 

export const ActionTypes = Types; 
export default Creators; 

export const INITIAL_STATE = Immutable({
    signInSuccess: null,
    signInFailure: null,
    signInFetching: false,
    signedIn: false,
    access_token: null,
    todaysAppointments: null,
    getTodaysAppointmentsSuccess: null, 
    getTodaysAppointmentsFailure: null, 
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
        signInSuccess,
        signedIn: true,
    });

export const actionSignInFailure = (state, { signInFailure }) =>
    state.merge({
        signInSuccess: null,
        signInFetching: false, 
        signInFailure 
    });

export const actionSetApiToken = (state, {setApiToken}) => state.merge({access_token: setApiToken}); 

export const actionSignOutRequest = state => state;  

export const actionGetTodaysAppointmentsRequest = state => state; 

export const actionGetTodaysAppointmentsSuccess = (state, {todaysAppointmentsSuccess}) => { 
    console.log(todaysAppointmentsSuccess)
    return state.merge({
        todaysAppointments: todaysAppointmentsSuccess.data.appts,
        getTodaysAppointmentsSuccess: true, 
        getTodaysAppointmentsFailure: null, 
    })
}

export const actionGetTodaysAppointmentsFailure = (state, {todaysAppointmentsFailure}) => 
    state.merge({
        todaysAppointments: null,
        getTodaysAppointmentsSuccess: null, 
        getTodaysAppointmentsFailure: true,
    })


export const reducer = createReducer(INITIAL_STATE, {
    [Types.ACTION_SIGN_IN_REQUEST]: actionSignInRequest, 
    [Types.ACTION_SIGN_IN_SUCCESS]: actionSignInSuccess,
    [Types.ACTION_SIGN_IN_FAILURE]: actionSignInFailure,
    [Types.ACTION_SET_API_TOKEN]: actionSetApiToken,
    [Types.ACTION_SIGN_OUT_REQUEST]: actionSignOutRequest, 
    [Types.ACTION_GET_TODAYS_APPOINTMENTS_REQUEST]: actionGetTodaysAppointmentsRequest, 
    [Types.ACTION_GET_TODAYS_APPOINTMENTS_SUCCESS]: actionGetTodaysAppointmentsSuccess, 
    [Types.ACTION_GET_TODAYS_APPOINTMENTS_FAILURE]: actionGetTodaysAppointmentsFailure, 
}); 