import {combineReducers} from 'redux';
import {todoReducer}  from './todoreducer'


export const rootReducer = combineReducers ({
    todo:todoReducer
})