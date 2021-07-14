import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

const {Types, Creators} = createActions({
    actionSearchDogsRequest: ['searchDogs'], 
    actionSearchDogsSuccess: ['searchDogsSuccess'], 
    actionSearchDogsFailure: ['searchDogsFailure'], 
    actionNewDogSignUpRequest: ['newDogSignUpRequest'], 
    actionNewDogSignUpSuccess: ['newDogSignUpSuccess'], 
    actionNewDogSignUpFailure: ['newDogSignUpFailure'], 
}); 

export const ActionTypes = Types; 
export default Creators; 

export const INITIAL_STATE = Immutable({
    searchDogsList: [], 
    searchDogsFetching: null, 
    searchDogsSuccess: null, 
    searchDogsFailure: null, 
    newDogSignUpFetching: null, 
    newDogSignUpSuccess: null, 
    newDogSignUpFailure: null, 
});

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

export const reducer = createReducer(INITIAL_STATE, {
    [Types.ACTION_SEARCH_DOGS_REQUEST]: actionSearchDogsRequest, 
    [Types.ACTION_SEARCH_DOGS_SUCCESS]: actionSearchDogsSuccess, 
    [Types.ACTION_SEARCH_DOGS_FAILURE]: actionSearchDogsFailure, 
    [Types.ACTION_NEW_DOG_SIGN_UP_REQUEST]: actionNewDogSignUpRequest, 
    [Types.ACTION_NEW_DOG_SIGN_UP_SUCCESS]: actionNewDogSignUpSuccess, 
    [Types.ACTION_NEW_DOG_SIGN_UP_FAILURE]: actionNewDogSignUpFailure, 
}); 