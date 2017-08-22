import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { find, propEq } from 'ramda';

import CloseIcon from '../../icons/close';
import Currency from '../../components/Currency';
import AccountOperation from './AccountOperation';

import s from './AccountItemView.css';
import { formatDate } from '../../utils';


@connect(state => ({
  accounts: state.accounts.accounts,
  operations: state.accounts.operations
}))
export default class AccountItemView extends React.PureComponent {
  render() {
    const { id, accounts, operations } = this.props;

    const account = find(propEq('id', id), accounts);

    if (!account) {
      return (
        <div className={s.root}>
          <Link className={s.close} to="/accounts">
            <CloseIcon />
          </Link>
          Счет не найден.
        </div>
      );
    }

    const { balance, currency, annualPercent, createdAt } = account;
    const ops = operations[id];

    return (
      <div className={s.root}>
        <Link className={s.close} to="/accounts">
          <CloseIcon />
        </Link>
        <h3 className={s.id}>
          Счёт №{id}
        </h3>
        <h2 className={s.balance}>
          {balance} <Currency currency={currency} />
        </h2>

        <div className={s.annual}>
          {annualPercent}% годовых
        </div>

        <div className={s.createdAt}>
          Создан: {formatDate(createdAt)}
        </div>

        <div className={s.history}>
          <div className={s.title}>
            История операций
          </div>
          {ops && (ops.length > 0) ? (ops.map(op => (
            <AccountOperation
              key={op.id}
              type={op.type}
              card={op.card}
              amount={op.amount}
              currency={op.currency}
            />
          ))) : <div>Операций нет.</div>}
        </div>
      </div>
    );
  }
}

AccountItemView.propTypes = {
  id: PropTypes.number.isRequired
};

