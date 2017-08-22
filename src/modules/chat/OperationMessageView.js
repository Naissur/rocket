import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { find, propEq } from 'ramda';

import MessageView from './MessageView';
import AccountOperation from '../accounts/AccountOperation';

import s from './OperationMessageView.css';


@connect(state => ({
  operations: state.accounts.operations
}))
export default class OperationMessageView extends React.PureComponent {
  render() {
    const { opId, accountId, userAvatar, operations } = this.props;

    const op = find(propEq('id', opId), operations[accountId]);

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
  opId: PropTypes.number.isRequired
};

