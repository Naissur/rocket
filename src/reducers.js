import { combineReducers } from 'redux';
import chatReducer from './modules/chat/ChatState';
import accountsReducer from './modules/accounts/AccountsState';

const reducer = combineReducers({
  chat: chatReducer,
  accounts: accountsReducer,
});

export default reducer;
