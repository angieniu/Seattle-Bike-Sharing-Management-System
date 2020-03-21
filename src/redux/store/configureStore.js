import { createStore,applyMiddleware } from 'redux';
import reducer from './../reducer';
import { composeWithDevTools } from 'redux-devtools-extension'
const initialState = {
    menuName: ''
}
const configureStore = () => createStore(reducer, initialState);

export default configureStore;