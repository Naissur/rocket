import React from 'react';
import { connect } from 'react-redux';

import InvestmentView from './InvestmentView';

import s from './InvestmentsView.css';


@connect(state => ({
  investmentAccounts: state.investments.accounts
}))
export default class InvestmentsView extends React.PureComponent {
  render() {
    const { investmentAccounts } = this.props;

    return (
      <div className={s.root}>
        {investmentAccounts.map(({ id, balance, currency, annualPercent, createdAt }) => (
          <InvestmentView
            id={id}
            key={id}
            balance={balance}
            currency={currency}
            annualPercent={annualPercent}
            createdAt={createdAt}
          />
        ))}
      </div>
    );
  }
}
