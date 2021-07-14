import { put, takeLatest, call, all } from 'redux-saga/effects'; 
import API from '../services/api'; 
import {ActionTypes} from '../reducers/reducers';
// import Actions from '../reducers/reducers'; 
import SessionActions from '../reducers/session'; 
import ApptCrudActions from '../reducers/appointments/appointmentCrud'; 
import ApptServiceActions from '../reducers/appointments/appointmentActions'; 
import DogActions from '../reducers/dogs'; 

// export const api =  API.create('https://obscure-springs-15052.herokuapp.com'); 
export const api = API.create('http://localhost:5000'); 

function* signIn(api, {signInRequest}){
    const response = yield call(api.signIn, signInRequest); 
    if(response && response.ok) { 
        yield put(SessionActions.actionSignInSuccess(response));  
        yield put(SessionActions.actionSetApiToken(response.data.access_token));  
        yield put(ApptCrudActions.actionGetTodaysAppointmentsRequest(response)); 
    }
    else{
        yield put(SessionActions.actionSignInFailure(response)); 
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
        yield put(ApptCrudActions.actionGetTodaysAppointmentsSuccess(response.data.appts)); 
    }
    else {
        yield put(ApptCrudActions.actionGetTodaysAppointmentsFailure(response));
    } 
}

function* updateAppointment(api, {updateAppointment}){ 
    const response = yield call(api.updateAppointment, updateAppointment); 
    if (response && response.ok){
        yield put(ApptCrudActions.actionUpdateAppointmentSuccess(response));  
        yield put(ApptCrudActions.actionGetTodaysAppointmentsRequest(response)); 
    }
    else { 
        yield put(ApptCrudActions.actionUpdateAppointmentFailure(response)); 
    } 
}

function* searchDogs(api, {searchDogs}){
    const response = yield call(api.searchDogs, searchDogs); 
    if (response && response.ok){
        yield put(DogActions.actionSearchDogsSuccess(response)); 
    } 
    else{
        yield put(DogActions.actionSearchDogsFailure(response)); 
    }
}

function* checkInWithAppointment(api, {checkInWithAppointmentRequest}){ 
    const response = yield call(api.checkInWithAppointment, checkInWithAppointmentRequest); 
    if (response && response.ok) yield put(ApptServiceActions.actionCheckInWithAppointmentSuccess(response)); 
    else yield put(ApptServiceActions.actionCheckInWithAppointmentFailure(response)); 
}

function* checkOutAppointment(api, {checkOutAppointmentRequest}){
    const response = yield call(api.checkOutAppointment, checkOutAppointmentRequest); 
    if (response && response.ok) yield put(ApptServiceActions.actionCheckOutAppointmentSuccess(response)); 
    else yield put(ApptServiceActions.actionCheckOutAppointmentFailure(response)); 
}

function* newDogSignUp(api, {newDogSignUpRequest}){
    const response = yield call(api.newDogSignUp, newDogSignUpRequest); 
    if (response && response.ok) yield put(DogActions.actionNewDogSignUpSuccess(response)); 
    else yield put(DogActions.actionNewDogSignUpFailure(response)); 
}

function* newAppointment(api, {newAppointmentRequest}){
    const response = yield call(api.newAppointment, newAppointmentRequest); 
    if(response && response.ok) {
        yield put(ApptCrudActions.actionNewAppointmentSuccess(response));
        yield put(ApptCrudActions.actionGetTodaysAppointmentsRequest(response)); 
    } 
    else yield put(ApptCrudActions.actionNewAppointmentFailure(response)); 
}

function* appointmentHistory(api, {appointmentHistoryRequest}){
    const response = yield call(api.fetchAppointmentHistory, appointmentHistoryRequest); 
    if (response && response.ok) yield put(ApptCrudActions.actionAppointmentHistorySuccess(response)); 
    else yield put(ApptCrudActions.actionAppointmentHistoryFailure(response)); 
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
        takeLatest('ACTION_NEW_APPOINTMENT_REQUEST', newAppointment, api), 
        takeLatest('ACTION_APPOINTMENT_HISTORY_REQUEST', appointmentHistory, api), 
    ]); 
}