import { createStore } from 'redux';
import reducer from './store';

export const ConfigureStore = () => {
    const store = createStore(reducer);
    return store
}