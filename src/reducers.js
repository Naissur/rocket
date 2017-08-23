import { combineReducers } from 'redux';
import chatReducer from './modules/chat/ChatState';
import accountsReducer from './modules/accounts/AccountsState';
import investmentsReducer from './modules/investments/InvestmentsState';

const reducer = combineReducers({
  chat: chatReducer,
  accounts: accountsReducer,
  investments: investmentsReducer
});

export default reducer;
