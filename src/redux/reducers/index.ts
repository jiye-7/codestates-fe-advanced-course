import { combineReducers } from 'redux';
import post from './postReducer';

const rootReducer = combineReducers({ post });

export default rootReducer;
