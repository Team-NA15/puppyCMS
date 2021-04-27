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
        yield put(Actions.actionGetTodaysAppointmentsFailure(response));
    } 
}

function* updateAppointment(api, {updateAppointment}){ 
    const response = yield call(api.updateAppointment, updateAppointment); 
    if (response && response.ok){
        yield put(Actions.actionUpdateAppointmentSuccess(response));  
    }
    else { 
        yield put(Actions.actionUpdateAppointmentFailure(response)); 
    } 
}

function* searchDogs(api, {searchDogs}){
    const response = yield call(api.searchDogs, searchDogs); 
    if (response && response.ok){
        yield put(Actions.actionSearchDogsSuccess(response)); 
    } 
    else{
        yield put(Actions.actionSearchDogsFailure(response)); 
    }
}

function* checkInWithAppointment(api, {checkInWithAppointmentRequest}){ 
    const response = yield call(api.checkInWithAppointment, checkInWithAppointmentRequest); 
    if (response && response.ok) yield put(Actions.actionCheckInWithAppointmentSuccess(response)); 
    else yield put(Actions.actionCheckInWithAppointmentFailure(response)); 
}

function* checkOutAppointment(api, {checkOutAppointmentRequest}){
    const response = yield call(api.checkOutAppointment, checkOutAppointmentRequest); 
    if (response && response.ok) yield put(Actions.actionCheckOutAppointmentSuccess(response)); 
    else yield put(Actions.actionCheckOutAppointmentFailure(response)); 
}

function* newDogSignUp(api, {newDogSignUpRequest}){
    const response = yield call(api.newDogSignUp, newDogSignUpRequest); 
    if (response && response.ok) yield put(Actions.actionNewDogSignUpSuccess(response)); 
    else yield put(Actions.actionNewDogSignUpFailure(response)); 
}

export default function* root(){
    yield all([
        // takeLatest(ActionTypes.ACTION_SIGN_IN_REQUEST, signIn, api), 
        // takeLatest(ActionTypes.ACTION_SET_API_TOKEN, setApiToken, api), 
        takeLatest("ACTION_SIGN_IN_REQUEST", signIn, api), 
        takeLatest("ACTION_SET_API_TOKEN", setApiToken, api),
        takeLatest('ACTION_SIGN_OUT_REQUEST', signOut, api), 
        takeLatest('ACTION_GET_TODAYS_APPOINTMENTS_REQUEST', todaysAppointments, api), 
        takeLatest('ACTION_UPDATE_APPOINTMENT', updateAppointment, api), 
        takeLatest('ACTION_SEARCH_DOGS_REQUEST', searchDogs, api), 
        takeLatest('ACTION_CHECK_IN_WITH_APPOINTMENT_REQUEST', checkInWithAppointment, api), 
        takeLatest('ACTION_CHECK_OUT_APPOINTMENT_REQUEST', checkOutAppointment, api), 
        takeLatest('ACTION_NEW_DOG_SIGN_UP_REQUEST', newDogSignUp, api), 
    ]); 
}