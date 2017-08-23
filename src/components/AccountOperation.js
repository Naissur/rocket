import React from 'react';
import PropTypes from 'prop-types';

import Currency from './Currency';
import Signed from './Signed';
import { OP_CREDIT, OP_DEBIT, OP_INTEREST, OP_OPENING_DEPOSIT, OP_DEPOSIT } from '../constants';
import { formatDate } from '../utils';

import s from './AccountOperation.css';


const getAccountOperationCaption = type => {
  if (type === OP_CREDIT) return 'Пополнение с карты';
  if (type === OP_DEBIT) return 'Списание на карту';
  if (type === OP_INTEREST) return 'Начисление процентов';

  if (type === OP_OPENING_DEPOSIT) return 'Изначальный вклад';
  if (type === OP_DEPOSIT) return 'Вклад';
  return '';
};


export default class AccountOperation extends React.PureComponent {
  render() {
    const { type, card, amount, currency, date } = this.props;

    const caption = getAccountOperationCaption(type);
    const amountPositive = amount > 0;

    return (
      <div className={s.root}>
        <div className={s.date}>
          {formatDate(date)}
        </div>
        {caption} {card} <Signed positive={amountPositive}>
          {amountPositive ? '+' : '-'} {Math.abs(amount)} <Currency currency={currency} />
        </Signed>
      </div>
    );
  }
}

AccountOperation.propTypes = {
  type: PropTypes.string.isRequired,
  card: PropTypes.string,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  date : PropTypes.any.isRequired
};

