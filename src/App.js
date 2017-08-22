import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import cn from 'classnames';

import ChatView from './modules/chat/ChatView';
import AccountsView from './modules/accounts/AccountsView';
import InvestmentsView from './modules/investments/InvestmentsView';
import AccountItemView from './modules/accounts/AccountItemView';

// import logo from './logo.svg';
import s from './App.css';


const AccountsInvestmentsView = ({ match }) => {
  const { url } = match;

  return (
    <div className={s.accountsInvestmentsView}>
      <div className={s.nav} >
        <Link className={cn(s.accounts, (url.match(/accounts/)) && s.active)} to="/accounts">
          Счета
        </Link>
        <Link className={cn(s.investments, (url === '/investments') && s.active)} to="/investments">
          Вклады
        </Link>
      </div>
      <Route path="/accounts/:id" component={routeProps => <AccountItemView id={Number(routeProps.match.params.id)} />} />
      <Route exact path="/accounts" component={AccountsView} />
      <Route path="/investments" component={InvestmentsView} />
    </div>
  );
};

const BasicExample = () => (
  <Router>
    <div className={s.app}>
      <div className={s.chatContainer}>
        <ChatView />
      </div>

      <div className={s.accountsContainer}>
        <Route path="/accounts/:id" component={AccountsInvestmentsView} />
        <Route exact path="/accounts" component={AccountsInvestmentsView} />
        <Route path="/investments" component={AccountsInvestmentsView} />
        <Redirect to="/accounts" />
      </div>
    </div>
  </Router>
);

export default BasicExample;
