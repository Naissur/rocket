import React from 'react';

import { Link } from 'react-router-dom';

import s from './InvestmentView.css';
import Currency from '../../components/Currency';

import MaximizeIcon from '../../icons/maximize';
import { formatDate } from '../../utils';


export default class InvestmentView extends React.PureComponent {
  render() {
    const { id, balance, currency, annualPercent, createdAt } = this.props;

    return (
      <div className={s.root}>
        <Link className={s.expand} to={`/investments/${id}`}>
          <MaximizeIcon />
        </Link>
        <h3 className={s.id}>
          Вклад №{id}
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
      </div>
    );
  }
}
