import moment from 'moment';

import { CURRENCY_RUB, CURRENCY_USD, CURRENCY_EUR, OP_OPENING_DEPOSIT, OP_INTEREST } from '../../constants';

const initialState = {
  accounts: [{
    id: 57810456,
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
    id: 57390398,
    balance: 3502,
    currency: CURRENCY_USD,

    annualPercent: 4,
    createdAt: moment('2016-08-16 10:12').toJSON(),

    lastOperation: {
      date: moment('2016-05-18 13:48').toJSON(),
      amount: -96,
      currency: CURRENCY_USD
    }
  }, {
    id: 57180270,
    balance: 10500,
    currency: CURRENCY_EUR,

    annualPercent: 8,
    createdAt: moment('2016-03-01 20:03').toJSON(),

    lastOperation: {
      date: moment('2016-05-18 13:48').toJSON(),
      amount: 500,
      currency: CURRENCY_EUR
    }
  }],

  operations: {
    '57810456': [
      {
        id: 1,
        date: moment('2016-03-08 19:21'),
        type: OP_INTEREST,
        amount: 350,
        currency: CURRENCY_RUB
      }, {
        id: 2,
        date: moment('2016-03-04 15:13'),
        type: OP_OPENING_DEPOSIT,
        amount: 25000,
        currency: CURRENCY_RUB
      }
    ],
    '57390398': [],
    '57180270': []

  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

