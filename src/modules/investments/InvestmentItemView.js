import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { find, propEq } from 'ramda';

import CloseIcon from '../../icons/close';
import Currency from '../../components/Currency';
import AccountOperation from '../../components/AccountOperation';
import MessageIcon from '../../icons/message';
import { sendChatInvestmentOperationMessage } from '../chat/ChatState';

import s from './InvestmentItemView.css';
import { formatDate } from '../../utils';


const InvestmentOperationItem = ({ id, type, card, amount, currency, date, onShare }) => (
  <div className={s.opItem}>
    <div onClick={() => onShare(id)} className={s.share}>
      <MessageIcon />
    </div>
    <AccountOperation
      type={type}
      card={card}
      amount={amount}
      date={date}
      currency={currency}
    />
  </div>
);


@connect(state => ({
  investmentAccounts: state.investments.accounts,
  operations: state.investments.operations
}), d => bindActionCreators({
  sendChatInvestmentOperationMessage
}, d))
export default class InvestmentItemView extends React.PureComponent {
  handleOperationShare = opId => {
    const { id } = this.props;

    this.props.sendChatInvestmentOperationMessage({
      userAvatar: 'https://randomuser.me/api/portraits/men/35.jpg',
      accountId: id,
      opId
    });
  }

  render() {
    const { id, investmentAccounts, operations } = this.props;

    const account = find(propEq('id', id), investmentAccounts);

    if (!account) {
      return (
        <div className={s.root}>
          <Link className={s.close} to="/accounts">
            <CloseIcon />
          </Link>
          Вклад не найден.
        </div>
      );
    }

    const { balance, currency, annualPercent, createdAt } = account;
    const ops = operations[id];

    return (
      <div className={s.root}>
        <div className={s.info}>
          <Link className={s.close} to="/investments">
            <CloseIcon />
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

        <div className={s.history}>
          <div className={s.title}>
            История операций
          </div>
          {ops && (ops.length > 0) ? (ops.map(op => (
            <InvestmentOperationItem
              key={op.id}
              id={op.id}
              type={op.type}
              card={op.card}
              date={op.date}
              amount={op.amount}
              currency={op.currency}
              onShare={this.handleOperationShare}
            />
          ))) : <div className={s.emptyCaption}>Операций нет.</div>}
        </div>
      </div>
    );
  }
}

InvestmentItemView.propTypes = {
  id: PropTypes.number.isRequired
};

