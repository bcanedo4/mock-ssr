import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import App from './components/app';

// get state
const state = window.__STATE__;

// delete from global window object
delete window.__STATE__;

// create the store
const store = configureStore(state);

// hydrate ensuring both client and server pages are identical
hydrate(
  <Provider store={store}> 
    <App /> 
  </Provider>,
  document.querySelector('#app')
);