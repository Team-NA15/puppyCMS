import { createReducer } from 'reduxsauce'; 
import Immutable from 'seamless-immutable'; 
import {INITIAL_STATE as crudInitialState, reducerObject as crudReducer } from './appointmentCrud'; 
import { INITIAL_STATE as actionsInitialState, reducerObject as actionsReducer } from './appointmentActions'; 

export const INITIAL_STATE = Immutable({
    ...crudInitialState, 
    ...actionsInitialState, 
})

export const reducer = createReducer({...crudInitialState, ...actionsInitialState}, {
    ...crudReducer, 
    ...actionsReducer, 
}); 