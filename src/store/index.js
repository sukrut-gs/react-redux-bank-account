import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = {
    balance: 1000,
    message: ''
};

export const store = createStore(reducer, initialState);