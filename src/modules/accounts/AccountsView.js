import React from 'react';
import { connect } from 'react-redux';

import AccountView from './AccountView';


@connect(state => ({
  accounts: state.accounts.accounts
}))
export default class AccountsView extends React.PureComponent {
  render() {
    const { accounts } = this.props;

    return (
      <div>{accounts.map(({ id, balance, currency, annualPercent, createdAt, lastOperation }) => (
        <AccountView
          id={id}
          key={id}
          balance={balance}
          currency={currency}
          annualPercent={annualPercent}
          createdAt={createdAt}
          lastOperation={lastOperation}
        />
      ))}
      </div>
    );
  }
}
