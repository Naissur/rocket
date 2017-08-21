import moment from 'moment';

import { CURRENCY_RUB, CURRENCY_USD } from '../../constants';

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
  }, {
    id: 57890398,
    balance: 3502,
    currency: CURRENCY_USD,

    annualPercent: 4,
    createdAt: moment('2016-08-16 10:12').toJSON(),

    lastOperation: {
      date: moment('2016-05-18 13:48').toJSON(),
      amount: -96,
      currency: CURRENCY_USD
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

