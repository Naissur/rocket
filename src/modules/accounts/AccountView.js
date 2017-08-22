import React from 'react';

import { Link } from 'react-router-dom';

import s from './AccountView.css';
import Currency from '../../components/Currency';
import Signed from '../../components/Signed';

import MaximizeIcon from '../../icons/maximize';
import { formatDate } from '../../utils';


export default class AccountView extends React.PureComponent {
  render() {
    const { id, balance, currency, annualPercent, createdAt, lastOperation } = this.props;

    const lastOpAmountPositive = lastOperation && lastOperation.amount > 0;

    const LastOp = lastOperation && (
      <Signed positive={lastOpAmountPositive}>
        {lastOpAmountPositive ? '+' : '-'} {Math.abs(lastOperation.amount)} <Currency currency={lastOperation.currency} />
      </Signed>
    );

    return (
      <div className={s.root}>
        <Link className={s.expand} to={`/accounts/${id}`}>
          <MaximizeIcon />
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

        <div className={s.lastOperation}>
          Последняя операция: {formatDate(lastOperation.date)} ({LastOp})
        </div>
      </div>
    );
  }
}
