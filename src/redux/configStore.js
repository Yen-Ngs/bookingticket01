import {applyMiddleware, combineReducers, createStore} from 'redux';
import { PhimReducer } from './reducers/PhimReducer';
import reduxThunk from 'redux-thunk';
import { LoadingReducer } from './reducers/LoadingReducer';
import { RegisterReducer } from './reducers/RegisterReducer';
const rootReducer = combineReducers({
    PhimReducer:PhimReducer,
    LoadingReducer:LoadingReducer,
    RegisterReducer:RegisterReducer


})
export const store = createStore(rootReducer, applyMiddleware(reduxThunk));