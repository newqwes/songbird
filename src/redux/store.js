import appReducer from './appReducer';
import {createStore, combineReducers} from 'redux'

let reducers = combineReducers({ appReducer })
export default createStore(reducers)