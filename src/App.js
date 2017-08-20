import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

import ChatView from './modules/chat/ChatView';

// import logo from './logo.svg';
import './App.css';

const Accounts = () => (
  <div>
    <h2>Accounts</h2>
  </div>
);

const Investments = () => (
  <div>
    <h2>Investments</h2>
  </div>
);

/*
      <ul>
        <li><Link to="/accounts">Accounts</Link></li>
        <li><Link to="/investments">Investments</Link></li>
      </ul>

*/

const BasicExample = () => (
  <Router>
    <div className="app">
      <div className="app__chat-container">
        <ChatView />
      </div>

      <div className="app__accounts-container">
        <Route exact path="/accounts" component={Accounts} />
        <Route path="/investments" component={Investments} />
        <Redirect to="/accounts" />
      </div>
    </div>
  </Router>
);

export default BasicExample;
