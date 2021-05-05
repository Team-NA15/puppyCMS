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
    actionNewDogSignUpRequest: ['newDogSignUpRequest'], 
    actionNewDogSignUpSuccess: ['newDogSignUpSuccess'], 
    actionNewDogSignUpFailure: ['newDogSignUpFailure'], 
    actionNewAppointmentRequest: ['newAppointmentRequest'], 
    actionNewAppointmentSuccess: ['newAppointmentSuccess'], 
    actionNewAppointmentFailure: ['newAppointmentFailure'], 
    actionAppointmentHistoryRequest: ['appointmentHistoryRequest'], 
    actionAppointmentHistorySuccess: ['appointmentHistorySuccess'], 
    actionAppointmentHistoryFailure: ['appointmentHistoryFailure'], 
}); 

export const ActionTypes = Types; 
export default Creators; 

export const INITIAL_STATE = Immutable({
    signInSuccess: null,
    signInFailure: null,
    signInFetching: null,
    signedIn: false,
    access_token: null,
    todaysAppointments: [],
    getTodaysAppointmentsSuccess: null, 
    getTodaysAppointmentsFailure: null, 
    updatingAppointment: null,  
    updateAppointmentSuccess: null, 
    updateAppointmentFailure: null, 
    searchDogsList: [], 
    searchDogsFetching: null, 
    searchDogsSuccess: null, 
    searchDogsFailure: null, 
    checkInAppointmentFetching: null, 
    checkInAppointmentSuccess: null, 
    checkInAppointmentFailure: null, 
    checkInNoAppointmentFetching: null, 
    checkInNoAppointmentSuccess: null, 
    checkInNoAppointmentFailure: null, 
    checkOutAppointmentFetching: null, 
    checkOutAppointmentSuccess: null, 
    checkOutAppointmentFailure: null, 
    newDogSignUpFetching: null, 
    newDogSignUpSuccess: null, 
    newDogSignUpFailure: null, 
    newAppointmentFetching: null, 
    newAppointmentSuccess: null, 
    newAppointmentFailure: null,
    appointmentHistory: [],  
    appointmentHistoryFetching: null, 
    appointmentHistorySuccess: null, 
    appointmentHistoryFailure: null, 
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

export const actionCheckInNoAppointmentRequest = (state, {checkInNoAppointmentRequest}) => {
    return state.merge({
        checkInNoAppointmentFetching: true, 
    })
}

export const actionCheckInNoAppointmentSuccess = (state, {checkInNoAppointmentSuccess}) => {
    const updated = checkInNoAppointmentSuccess.data.updated; 
    return state.merge({
        checkInNoAppointmentFetching: null, 
        checkInNoAppointmentSuccess: true, 
        checkInNoAppointmentFailure: false, 
        todaysAppointments: state.todaysAppointments.map(appt => {
            if (appt.dog_name === updated.dog_name && appt.owner_last_name == updated.owner_last_name && appt.breed == updated.breed) return updated; 
            else return appt; 
        })
    }); 
}

export const actionCheckInNoAppointmentFailure = (state, {checkInNoAppointmentFailure}) => {
    return state.merge({
        checkInNoAppointmentFetching: null, 
        checkInNoAppointmentSuccess: false, 
        checkInNoAppointmentFailure: {...checkInNoAppointmentFailure}
    })
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

export const actionNewDogSignUpRequest = (state, {newDogSignUpRequest}) => { 
    return state.merge({
        newDogSignUpFetching: true, 
    }); 
}

export const actionNewDogSignUpSuccess = (state, {newDogSignUpSuccess}) => {
    return state.merge({
        newDogSignUpFetching: false, 
        newDogSignUpSuccess: true, 
        newDogSignUpFailure: false, 
    }); 
}

export const actionNewDogSignUpFailure = (state, {newDogSignUpFailure}) => {
    return state.merge({
        newDogSignUpFetching: false, 
        newDogSignUpSuccess: false, 
        newDogSignUpFailure: {...newDogSignUpFailure}
    }); 
}

export const actionNewAppointmentRequest = (state, {newAppointmentRequest}) => {
    return state.merge({
        newAppointmentFetching: true, 
    }); 
}

export const actionNewAppointmentSuccess = (state, {newAppointmentSuccess}) => {
    return state.merge({
        newAppointmentFetching: false, 
        newAppointmentSuccess: true, 
        newAppointmentFailure: false 
    }); 
}

export const actionNewAppointmentFailure = (state, {newAppointmentFailure}) => {
    return state.merge({
        newAppointmentFetching: false, 
        newAppointmentSuccess: false, 
        newAppointmentFailure: {...newAppointmentFailure}
    }); 
}

export const actionAppointmentHistoryRequest = (state, {appointmentHistoryRequest}) => {
    return state.merge({
        appointmentHistoryFetching: true, 
    }); 
}

export const actionAppointmentHistorySuccess = (state, {appointmentHistorySuccess}) => {
    const appointmentHistory = appointmentHistorySuccess.data.appointmentHistory;  
    return state.merge({
        appointmentHistory, 
        appointmentHistoryFetching: false, 
        appointmentHistorySuccess: true, 
        appointmentHistoryFailure: false, 
    }); 
}

export const actionAppointmentHistoryFailure = (state, {appointmentHistoryFailure}) => {
    return state.merge({
        appointmentHistoryFetching: false, 
        appointmentHistorySuccess: false, 
        appointmentHistoryFailure: {...appointmentHistoryFailure}
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
    [Types.ACTION_CHECK_IN_NO_APPOINTMENT_REQUEST]: actionCheckInNoAppointmentRequest, 
    [Types.ACTION_CHECK_IN_NO_APPOINTMENT_SUCCESS]: actionCheckInNoAppointmentSuccess, 
    [Types.ACTION_CHECK_IN_NO_APPOINTMENT_FAILURE]: actionCheckInNoAppointmentFailure, 
    [Types.ACTION_CHECK_OUT_APPOINTMENT_REQUEST]: actionCheckOutAppointmentRequest, 
    [Types.ACTION_CHECK_OUT_APPOINTMENT_SUCCESS]: actionCheckOutAppointmentSuccess, 
    [Types.ACTION_CHECK_OUT_APPOINTMENT_FAILURE]: actionCheckOutAppointmentFailure, 
    [Types.ACTION_NEW_DOG_SIGN_UP_REQUEST]: actionNewDogSignUpRequest, 
    [Types.ACTION_NEW_DOG_SIGN_UP_SUCCESS]: actionNewDogSignUpSuccess, 
    [Types.ACTION_NEW_DOG_SIGN_UP_FAILURE]: actionNewDogSignUpFailure, 
    [Types.ACTION_NEW_APPOINTMENT_REQUEST]: actionNewAppointmentRequest, 
    [Types.ACTION_NEW_APPOINTMENT_SUCCESS]: actionNewAppointmentSuccess, 
    [Types.ACTION_NEW_APPOINTMENT_FAILURE]: actionNewAppointmentFailure, 
    [Types.ACTION_APPOINTMENT_HISTORY_REQUEST]: actionAppointmentHistoryRequest, 
    [Types.ACTION_APPOINTMENT_HISTORY_SUCCESS]: actionAppointmentHistorySuccess, 
    [Types.ACTION_APPOINTMENT_HISTORY_FAILURE]: actionAppointmentHistoryFailure, 
}); 