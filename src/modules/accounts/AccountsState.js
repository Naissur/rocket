import moment from 'moment';

import { CURRENCY_RUB } from '../../constants';

const initialState = {
  accounts: [{
    id: 57890456,
    balance: 69650,
    currency: CURRENCY_RUB,

    annualPercent: 8,
    createdAt: moment('2015-01-23 13:55').toJSON(),

    lastOperation: {
      date: moment('2017-03-08 19:21').toJSON(),
      amount: 3500,
      currency: CURRENCY_RUB
    }
  }]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

