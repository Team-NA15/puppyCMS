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
    actionUpdateAppointment: ['updateAppointment'], 
    actionUpdateAppointmentSuccess: ['updateAppointmentSuccess'], 
    actionUpdateAppointmentFailure: ['updateAppointmentFailure'], 
    actionSearchDogsRequest: ['searchDogs'], 
    actionSearchDogsSuccess: ['searchDogsSuccess'], 
    actionSearchDogsFailure: ['searchDogsFailure'], 
    actionCheckInWithAppointmentRequest: ['checkInWithAppointmentRequest'], 
    actionCheckInWithAppointmentSuccess: ['checkInWithAppointmentSuccess'], 
    actionCheckInWithAppointmentFailure: ['checkInWithAppointmentFailure'], 
    actionCheckInNoAppointmentRequest: ['checkInNoAppointmentRequest'], 
    actionCheckInNoAppointmentSuccess: ['checkInNoAppointmentSuccess'], 
    actionCheckInNoAppointmentFailure: ['checkInNoAppointmentFailure'], 
    actionCheckOutAppointmentRequest: ['checkOutAppointmentRequest'],
    actionCheckOutAppointmentSuccess: ['checkOutAppointmentSuccess'], 
    actionCheckOutAppointmentFailure: ['checkOutAppointmentFailure'], 
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
    updatingAppointment: null,  
    updateAppointmentSuccess: null, 
    updateAppointmentFailure: null, 
    searchDogsList: null, 
    searchDogsFetching: null, 
    searchDogsSuccess: null, 
    searchDogsFailure: null, 
    checkInAppointmentFetching: null, 
    checkInAppointmentSuccess: null, 
    checkInAppointmentFailure: null, 
    checkOutAppointmentFetching: null, 
    checkOutAppointmentSuccess: null, 
    checkOutAppointmentFailure: null, 
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

export const actionGetTodaysAppointmentsSuccess = (state, {getTodaysAppointmentsSuccess}) => { 
    return state.merge({
        todaysAppointments: getTodaysAppointmentsSuccess,
        getTodaysAppointmentsSuccess: true, 
        getTodaysAppointmentsFailure: null, 
    })
}

export const actionGetTodaysAppointmentsFailure = (state, {getTodaysAppointmentsFailure}) => 
    state.merge({
        todaysAppointments: null,
        getTodaysAppointmentsSuccess: null, 
        getTodaysAppointmentsFailure,
    })

export const actionUpdateAppointment = state => 
    state.merge({
        updatingAppointment: true
    })

export const actionUpdateAppointmentSuccess = (state, {updateAppointmentSuccess}) => {
    const updated = updateAppointmentSuccess.data.updateAppointment;
       
    return state.merge({
        updatingAppointment: false, 
        updateAppointmentSuccess: true, 
        updateAppointmentFailure: null,
        todaysAppointments: state.todaysAppointments.map(appt => {
            if (appt.dog_name === updated.dog_name && appt.owner_last_name == updated.owner_last_name && appt.breed == updated.breed) return updated; 
            else return appt; 
        }) 
    });  
}

export const actionUpdateAppointmentFailure = (state, {updateAppointmentFailure}) => { 
    return state.merge({
        updatingAppointment: false, 
        updateAppointmentSuccess: false, 
        updateAppointmentFailure,
    }); 
}

export const actionSearchDogsRequest = (state, {searchDogs}) => 
    state.merge({
        searchDogsFetching: true,  
    })

export const actionSearchDogsSuccess = (state, {searchDogsSuccess}) => 
    state.merge({
        searchDogsList: searchDogsSuccess.data.dogs, 
        searchDogsFetching: false, 
        searchDogsSuccess: true, 
        searchDogsFailure: false, 
    })

export const actionSearchDogsFailure = (state, {searchDogsFailure}) => 
    state.merge({
        searchDogsFetching: false, 
        searchDogsSuccess: false, 
        searchDogsFailure: {...searchDogsFailure}
    })

export const actionCheckInWithAppointmentRequest = (state, {checkInWithAppointmentRequest}) => { 
    return state.merge({
        checkInWithAppointmentFetching: true,
    })
}

export const actionCheckInWithAppointmentSuccess = (state, {checkInWithAppointmentSuccess}) => {
    const updated = checkInWithAppointmentSuccess.data.updated; 
    return state.merge({
        checkInWithAppointmentFetching: null, 
        checkInWithAppointmentSuccess: true, 
        checkInWithAppointmentFailure: false,
        todaysAppointments: state.todaysAppointments.map(appt => {
            if (appt.dog_name === updated.dog_name && appt.owner_last_name == updated.owner_last_name && appt.breed == updated.breed) return updated; 
            else return appt; 
        })
    }); 
}

export const actionCheckInWithAppointmentFailure = (state, {checkInWithAppointmentFailure}) => {
    return state.merge({
        checkInWithAppointmentFetching: null, 
        checkInWithAppointmentSuccess: false, 
        checkInWithAppointmentFailure: {...checkInWithAppointmentFailure},
    }); 
}

export const actionCheckOutAppointmentRequest = (state, {checkOutAppointmentRequest}) => {
    return state.merge({
        checkOutAppointmentFetching: true, 
    }); 
}

export const actionCheckOutAppointmentSuccess = (state, {checkOutAppointmentSuccess}) => {
    const updated = checkOutAppointmentSuccess.data.updated; 
    return state.merge({
        checkOutAppointmentFetching: false, 
        checkOutAppointmentSuccess: true, 
        checkOutAppointmentFailure: false, 
        todaysAppointments: state.todaysAppointments.map(appt => {
            if (appt.dog_name === updated.dog_name && appt.owner_last_name == updated.owner_last_name && appt.breed == updated.breed) return updated; 
            else return appt; 
        })
    }); 
}

export const actionCheckOutAppointmentFailure = (state, {checkOutAppointmentFailure}) => {
    return state.merge({
        checkOutAppointmentFetching: false, 
        checkOutAppointmentSuccess: false, 
        checkOutAppointmentFailure: {...checkOutAppointmentFailure},
    }); 
}


export const reducer = createReducer(INITIAL_STATE, {
    [Types.ACTION_SIGN_IN_REQUEST]: actionSignInRequest, 
    [Types.ACTION_SIGN_IN_SUCCESS]: actionSignInSuccess,
    [Types.ACTION_SIGN_IN_FAILURE]: actionSignInFailure,
    [Types.ACTION_SET_API_TOKEN]: actionSetApiToken,
    [Types.ACTION_SIGN_OUT_REQUEST]: actionSignOutRequest, 
    [Types.ACTION_GET_TODAYS_APPOINTMENTS_REQUEST]: actionGetTodaysAppointmentsRequest, 
    [Types.ACTION_GET_TODAYS_APPOINTMENTS_SUCCESS]: actionGetTodaysAppointmentsSuccess, 
    [Types.ACTION_GET_TODAYS_APPOINTMENTS_FAILURE]: actionGetTodaysAppointmentsFailure, 
    [Types.ACTION_UPDATE_APPOINTMENT]: actionUpdateAppointment, 
    [Types.ACTION_UPDATE_APPOINTMENT_SUCCESS]: actionUpdateAppointmentSuccess, 
    [Types.ACTION_UPDATE_APPOINTMENT_FAILURE]: actionUpdateAppointmentFailure, 
    [Types.ACTION_SEARCH_DOGS_REQUEST]: actionSearchDogsRequest, 
    [Types.ACTION_SEARCH_DOGS_SUCCESS]: actionSearchDogsSuccess, 
    [Types.ACTION_SEARCH_DOGS_FAILURE]: actionSearchDogsFailure, 
    [Types.ACTION_CHECK_IN_WITH_APPOINTMENT_REQUEST]: actionCheckInWithAppointmentRequest, 
    [Types.ACTION_CHECK_IN_WITH_APPOINTMENT_SUCCESS]: actionCheckInWithAppointmentSuccess, 
    [Types.ACTION_CHECK_IN_WITH_APPOINTMENT_FAILURE]: actionCheckInWithAppointmentFailure, 
    // [Types.ACTION_CHECK_IN_NO_APPOINTMENT_REQUEST]: actionCheckInNoAppointmentRequest, 
    // [Types.ACTION_CHECK_IN_NO_APPOINTMENT_SUCCESS]: actionCheckInNoAppointmentSuccess, 
    // [Types.ACTION_CHECK_IN_NO_APPOINTMENT_FAILURE]: actionCheckInNoAppointmentFailure, 
    [Types.ACTION_CHECK_OUT_APPOINTMENT_REQUEST]: actionCheckOutAppointmentRequest, 
    [Types.ACTION_CHECK_OUT_APPOINTMENT_SUCCESS]: actionCheckOutAppointmentSuccess, 
    [Types.ACTION_CHECK_OUT_APPOINTMENT_FAILURE]: actionCheckOutAppointmentFailure, 
}); 