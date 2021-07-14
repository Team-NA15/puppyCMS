import { createActions, createReducer } from 'reduxsauce'; 
import Immutable from 'seamless-immutable'; 

const { Types, Creators } = createActions({
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
    checkInAppointmentFetching: null, 
    checkInAppointmentSuccess: null, 
    checkInAppointmentFailure: null, 
    checkInNoAppointmentFetching: null, 
    checkInNoAppointmentSuccess: null, 
    checkInNoAppointmentFailure: null, 
    checkOutAppointmentFetching: null, 
    checkOutAppointmentSuccess: null, 
    checkOutAppointmentFailure: null, 
}); 

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

// export const reducer = createReducer(INITIAL_STATE, {
//     [Types.ACTION_CHECK_IN_WITH_APPOINTMENT_REQUEST]: actionCheckInWithAppointmentRequest, 
//     [Types.ACTION_CHECK_IN_WITH_APPOINTMENT_SUCCESS]: actionCheckInWithAppointmentSuccess, 
//     [Types.ACTION_CHECK_IN_WITH_APPOINTMENT_FAILURE]: actionCheckInWithAppointmentFailure, 
//     [Types.ACTION_CHECK_IN_NO_APPOINTMENT_REQUEST]: actionCheckInNoAppointmentRequest, 
//     [Types.ACTION_CHECK_IN_NO_APPOINTMENT_SUCCESS]: actionCheckInNoAppointmentSuccess, 
//     [Types.ACTION_CHECK_IN_NO_APPOINTMENT_FAILURE]: actionCheckInNoAppointmentFailure, 
//     [Types.ACTION_CHECK_OUT_APPOINTMENT_REQUEST]: actionCheckOutAppointmentRequest, 
//     [Types.ACTION_CHECK_OUT_APPOINTMENT_SUCCESS]: actionCheckOutAppointmentSuccess, 
//     [Types.ACTION_CHECK_OUT_APPOINTMENT_FAILURE]: actionCheckOutAppointmentFailure, 
// })

export const reducerObject = {
    [Types.ACTION_CHECK_IN_WITH_APPOINTMENT_REQUEST]: actionCheckInWithAppointmentRequest, 
    [Types.ACTION_CHECK_IN_WITH_APPOINTMENT_SUCCESS]: actionCheckInWithAppointmentSuccess, 
    [Types.ACTION_CHECK_IN_WITH_APPOINTMENT_FAILURE]: actionCheckInWithAppointmentFailure, 
    [Types.ACTION_CHECK_IN_NO_APPOINTMENT_REQUEST]: actionCheckInNoAppointmentRequest, 
    [Types.ACTION_CHECK_IN_NO_APPOINTMENT_SUCCESS]: actionCheckInNoAppointmentSuccess, 
    [Types.ACTION_CHECK_IN_NO_APPOINTMENT_FAILURE]: actionCheckInNoAppointmentFailure, 
    [Types.ACTION_CHECK_OUT_APPOINTMENT_REQUEST]: actionCheckOutAppointmentRequest, 
    [Types.ACTION_CHECK_OUT_APPOINTMENT_SUCCESS]: actionCheckOutAppointmentSuccess, 
    [Types.ACTION_CHECK_OUT_APPOINTMENT_FAILURE]: actionCheckOutAppointmentFailure, 
}