import { put, takeLatest, call, all } from 'redux-saga/effects'; 
import API from '../services/api'; 
import {ActionTypes} from '../reducers/reducers';
import Actions from '../reducers/reducers'; 



export const api =  API.create('http://localhost:5000'); 

function* signIn(api, {signInRequest}){
    const response = yield call(api.signIn, signInRequest); 
    if(response && response.ok) { 
        yield put(Actions.actionSignInSuccess(response)); 
        yield put(Actions.actionSetApiToken(response.data.access_token));  
        yield put(Actions.actionGetTodaysAppointmentsRequest(response)); 
    }
    else{
        yield put(Actions.actionSignInFailure(response)); 
    }
}

function* setApiToken(api, {setApiToken}) { 
    yield call(api.setAuthToken, setApiToken); 
}

function* signOut(api){
    yield call(api.removeAuthToken); 
}

function* todaysAppointments(api){
    const response = yield call(api.getTodaysAppointments); 
    if(response && response.ok){ 
        yield put(Actions.actionGetTodaysAppointmentsSuccess(response.data.appts)); 
    }
    else {
        console.log('failure'); 
        yield put(Actions.actionGetTodaysAppointmentsFailure(response));
    } 
}

export default function* root(){
    yield all([
        // takeLatest(ActionTypes.ACTION_SIGN_IN_REQUEST, signIn, api), 
        // takeLatest(ActionTypes.ACTION_SET_API_TOKEN, setApiToken, api), 
        takeLatest("ACTION_SIGN_IN_REQUEST", signIn, api), 
        takeLatest("ACTION_SET_API_TOKEN", setApiToken, api),
        takeLatest('ACTION_SIGN_OUT_REQUEST', signOut, api), 
        takeLatest('ACTION_GET_TODAYS_APPOINTMENTS_REQUEST', todaysAppointments, api), 
    ]); 
}