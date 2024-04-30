import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/reducers';
import feedbackReducer from '../features/audioTest/reducer';
import testReducer from '../features/rapidTest/reducer';
const reducers = {
    authReducer,
    feedbackReducer,
    testReducer
};
    
export default combineReducers(reducers);
