import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer.js';
import thunkMiddleware from 'redux-thunk';



export default createStore(reducer, applyMiddleware(thunkMiddleware));
