import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //need to access to the store
import { createStore } from 'redux';

import App from './components/App';


import { addCharacterById } from './actions';

import rootReducers from './reducers'

const store = createStore(rootReducers);

console.log('store.getState() ', store.getState());

store.subscribe(() => console.log('store ', store.getState())) //event listener fire it whenever the store getting update

store.dispatch(addCharacterById(2)); //tell store to dipatch it

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'))