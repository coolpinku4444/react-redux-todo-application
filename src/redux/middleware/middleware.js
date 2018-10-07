import {logging} from './logging'
import {applyMiddleware} from 'redux'

export const middleWare = applyMiddleware(logging) ;