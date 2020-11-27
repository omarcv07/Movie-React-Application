import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './store';

export const ConfigureStore = () => {
    const store = createStore(reducer, applyMiddleware(thunk));
    return store
}