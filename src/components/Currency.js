import React from 'react';
import PropTypes from 'prop-types';

import { CURRENCY_RUB, CURRENCY_USD, CURRENCY_EUR } from '../constants';

export default class Currency extends React.PureComponent {
  render() {
    const { currency } = this.props;

    switch (currency) {
      case CURRENCY_RUB: return <span>₽</span>;
      case CURRENCY_USD: return <span>$</span>;
      case CURRENCY_EUR: return <span>€</span>;
      default: return <span />;
    }
  }
}

Currency.propTypes = {
  currency: PropTypes.string.isRequired
};

