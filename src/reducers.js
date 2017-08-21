import { combineReducers } from 'redux';
import chatReducer from './modules/chat/ChatState';

const reducer = combineReducers({
  chat: chatReducer,
});

export default reducer;
