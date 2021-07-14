import { createActions, createReducer } from 'reduxsauce'; 
import Immutable from 'seamless-immutable'; 

const { Types, Creators } = createActions({
    actionGetTodaysAppointmentsRequest:['getTodaysAppointmentsRequest'], 
    actionGetTodaysAppointmentsSuccess: ['getTodaysAppointmentsSuccess'], 
    actionGetTodaysAppointmentsFailure: ['getTodaysAppointmentsFailure'], 
    actionUpdateAppointment: ['updateAppointment'], 
    actionUpdateAppointmentSuccess: ['updateAppointmentSuccess'], 
    actionUpdateAppointmentFailure: ['updateAppointmentFailure'],
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
    todaysAppointments: [],
    getTodaysAppointmentsSuccess: null, 
    getTodaysAppointmentsFailure: null, 
    updatingAppointment: null,  
    updateAppointmentSuccess: null, 
    updateAppointmentFailure: null,
    newAppointmentFetching: null, 
    newAppointmentSuccess: null, 
    newAppointmentFailure: null,
    appointmentHistory: [],  
    appointmentHistoryFetching: null, 
    appointmentHistorySuccess: null, 
    appointmentHistoryFailure: null, 
}); 


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

// export const reducer = createReducer(INITIAL_STATE, {
//     [Types.ACTION_GET_TODAYS_APPOINTMENTS_REQUEST]: actionGetTodaysAppointmentsRequest, 
//     [Types.ACTION_GET_TODAYS_APPOINTMENTS_SUCCESS]: actionGetTodaysAppointmentsSuccess, 
//     [Types.ACTION_GET_TODAYS_APPOINTMENTS_FAILURE]: actionGetTodaysAppointmentsFailure, 
//     [Types.ACTION_UPDATE_APPOINTMENT]: actionUpdateAppointment, 
//     [Types.ACTION_UPDATE_APPOINTMENT_SUCCESS]: actionUpdateAppointmentSuccess, 
//     [Types.ACTION_UPDATE_APPOINTMENT_FAILURE]: actionUpdateAppointmentFailure, 
//     [Types.ACTION_NEW_APPOINTMENT_REQUEST]: actionNewAppointmentRequest, 
//     [Types.ACTION_NEW_APPOINTMENT_SUCCESS]: actionNewAppointmentSuccess, 
//     [Types.ACTION_NEW_APPOINTMENT_FAILURE]: actionNewAppointmentFailure, 
//     [Types.ACTION_APPOINTMENT_HISTORY_REQUEST]: actionAppointmentHistoryRequest, 
//     [Types.ACTION_APPOINTMENT_HISTORY_SUCCESS]: actionAppointmentHistorySuccess, 
//     [Types.ACTION_APPOINTMENT_HISTORY_FAILURE]: actionAppointmentHistoryFailure, 
// })

export const reducerObject = {
    [Types.ACTION_GET_TODAYS_APPOINTMENTS_REQUEST]: actionGetTodaysAppointmentsRequest, 
    [Types.ACTION_GET_TODAYS_APPOINTMENTS_SUCCESS]: actionGetTodaysAppointmentsSuccess, 
    [Types.ACTION_GET_TODAYS_APPOINTMENTS_FAILURE]: actionGetTodaysAppointmentsFailure, 
    [Types.ACTION_UPDATE_APPOINTMENT]: actionUpdateAppointment, 
    [Types.ACTION_UPDATE_APPOINTMENT_SUCCESS]: actionUpdateAppointmentSuccess, 
    [Types.ACTION_UPDATE_APPOINTMENT_FAILURE]: actionUpdateAppointmentFailure, 
    [Types.ACTION_NEW_APPOINTMENT_REQUEST]: actionNewAppointmentRequest, 
    [Types.ACTION_NEW_APPOINTMENT_SUCCESS]: actionNewAppointmentSuccess, 
    [Types.ACTION_NEW_APPOINTMENT_FAILURE]: actionNewAppointmentFailure, 
    [Types.ACTION_APPOINTMENT_HISTORY_REQUEST]: actionAppointmentHistoryRequest, 
    [Types.ACTION_APPOINTMENT_HISTORY_SUCCESS]: actionAppointmentHistorySuccess, 
    [Types.ACTION_APPOINTMENT_HISTORY_FAILURE]: actionAppointmentHistoryFailure, 
}