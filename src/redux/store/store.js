import {createStore,compose,applyMiddleware} from 'redux'
import {devToolsEnhancer} from 'redux-devtools-extension';
import {rootReducer} from '../reducer/rootreducer';
import {middleWare} from '../middleware/middleware';
const intialState = {};
export const store = createStore(rootReducer,intialState,compose(middleWare,devToolsEnhancer()));