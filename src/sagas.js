import { fork } from 'redux-saga/effects';
import { ChatSagas } from './modules/chat/ChatState';

export default function* () {
  yield fork(ChatSagas);
}
