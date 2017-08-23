import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { find, propEq } from 'ramda';

import MessageView from './MessageView';
import AccountOperation from '../../components/AccountOperation';

import s from './OperationMessageView.css';


@connect(state => ({
  accountOperations: state.accounts.operations,
  investmentsOperations: state.investments.operations
}))
export default class OperationMessageView extends React.PureComponent {
  render() {
    const {
      opId, accountId, userAvatar,
      accountOperations, investmentsOperations, investments
    } = this.props;

    const findOp = ops => find(propEq('id', opId), ops);

    const op = investments ?
      findOp(investmentsOperations[accountId] || []) :
      findOp(accountOperations[accountId] || []);

    if (!op) {
      return <noscript />;
    }

    const { type, card, amount, currency, date } = op;

    const Text = (
      <div className={s.root}>
        <div className={s.title}>Операция</div>
        <br />

        <AccountOperation
          type={type}
          card={card}
          amount={amount}
          currency={currency}
          date={date}
        />
      </div>
    );

    return (
      <MessageView
        text={Text}
        userAvatar={userAvatar}
        alignRight
      />
    );
  }
}

OperationMessageView.propTypes = {
  userAvatar: PropTypes.string.isRequired,
  accountId: PropTypes.number.isRequired,
  opId: PropTypes.number.isRequired,
  investments: PropTypes.bool
};

