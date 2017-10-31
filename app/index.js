import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';
import Hello from './containers/Hello.js';

const store = configureStore();

render (
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root')
)
