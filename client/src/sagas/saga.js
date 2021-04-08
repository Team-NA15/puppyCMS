import { put, takeLatest, call, all } from 'redux-saga/effects'; 
import API from '../services/api'; 
import {ActionTypes} from '../reducers/reducers';
import Actions from '../reducers/reducers'; 



export const api =  API.create('http://localhost:5000'); 

function* signIn(api, {signInRequest}){
    const response = yield call(api.signIn, signInRequest); 
    if(response && response.ok) { 
        yield put(Actions.actionSignInSuccess(response)); 
        yield call(api.setAuthToken, {access_token: response.access_token}); 
    }
    else{
        yield put(Actions.actionSignInFailure(response)); 
    }
}

function* setApiToken(api, {setApiToken}) {
    yield call(api.setAuthToken, setApiToken); 
}

export default function* root(){
    yield all([
        // takeLatest(ActionTypes.ACTION_SIGN_IN_REQUEST, signIn, api), 
        // takeLatest(ActionTypes.ACTION.SET_API_TOKEN, setApiToken, api), 
        takeLatest("ACTION_SIGN_IN_REQUEST", signIn, api), 
        takeLatest("ACTION_SET_API_TOKEN", setApiToken, api),
    ]); 
}