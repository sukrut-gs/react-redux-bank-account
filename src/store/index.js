import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = {
    balance: 500,
    message: ''
};

export const store = createStore(reducer, initialState);