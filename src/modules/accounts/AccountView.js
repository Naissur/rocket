import React from 'react';
import moment from 'moment';

import s from './AccountView.css';

const formatDate = date => moment(date).format('DD.MM.YYYY | HH:mm');


export default class AccountView extends React.PureComponent {
  render() {
    const { id, balance, currency, annualPercent, createdAt, lastOperation } = this.props;

    return (
      <div className={s.root}>
        <h3 className={s.id}>
          Счёт №{id}
        </h3>
        <h2 className={s.balance}>
          {balance}{currency}
        </h2>

        <div className={s.annual}>
          {annualPercent}% годовых
        </div>

        <div className={s.createdAt}>
          Создан: {formatDate(createdAt)}
        </div>

        <div className={s.lastOperation}>
          Последняя операция: {formatDate(lastOperation.date)} (+ 3)
        </div>
      </div>
    );
  }
}
