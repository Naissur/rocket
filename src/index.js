import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import chatReducer from './modules/chat/ChatState';

import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const reducer = combineReducers({
  chat: chatReducer,
});
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// registerServiceWorker();
