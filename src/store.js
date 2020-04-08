import rootReducer from './rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));
export default createStore(rootReducer, enhancer);

