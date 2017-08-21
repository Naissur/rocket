import { fork, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import moment from 'moment';

import { randomArrayItem } from '../../utils';

const debug = require('debug')('rocket:chat-state');

const uuid = require('uuid/v4');

// initial state
const INITIAL_MESSAGES = [
  {
    id: 0,
    type: 'text',
    text: 'могу',
    userAvatar: 'https://randomuser.me/api/portraits/men/35.jpg',
    userName: 'Иван',
    fromMe: true,
    date: moment().toJSON()
  }, {
    id: 1,
    type: 'text',
    text: 'можете?',
    userAvatar: 'https://randomuser.me/api/portraits/men/51.jpg',
    userName: 'Евгений',
    date: moment('2017-03-07').toJSON()
  }, {
    id: 2,
    type: 'text',
    text: 'можете? можете? можете? можете?м ожете?можете?можете?можете?можетеможетеможетеможете?можете????можете?',
    userAvatar: 'https://randomuser.me/api/portraits/men/51.jpg',
    userName: 'Евгений',
    date: moment('2017-03-05').toJSON()
  }, {
    id: 3,
    type: 'text',
    text: 'можете?',
    userAvatar: 'https://randomuser.me/api/portraits/men/51.jpg',
    userName: 'Евгений',
    date: moment('2017-03-05').toJSON()
  }
];

const initialState = {
  messages: INITIAL_MESSAGES
};


// actions

export const CHAT_SEND_MESSAGE = 'chat/SEND_MESSAGE';


// action creators

// TODO fromMe -> userId
export const sendChatTextMessage = ({ text, userAvatar, userName, fromMe }) => ({
  type: CHAT_SEND_MESSAGE,
  message: {
    id: uuid(), date: moment().toJSON(), type: 'text', text, userAvatar, userName, fromMe
  }
});

// reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case CHAT_SEND_MESSAGE: {
      return {
        ...state,
        messages: [action.message, ...state.messages]
      };
    }

    default: {
      return state;
    }
  }
};


export function* ChatSagas() {
  yield fork(initChatSaga);
  yield takeLatest(CHAT_SEND_MESSAGE, replySaga);
}

function* initChatSaga() {
  yield delay(2000);
  yield put(sendChatTextMessage({
    text: 'мммммможете?',
    userAvatar: 'https://randomuser.me/api/portraits/men/51.jpg',
    userName: 'Евгений'
  }));
}

const REPLY_PHRASES = [
  'Нет',
  'Да',
  'Наверное',
  'Жаль, что сказать'
];

function* replySaga(action) {
  if (action.message.fromMe) {
    debug('replying to message...');

    yield delay(1500);
    const text = randomArrayItem(REPLY_PHRASES);

    yield put(sendChatTextMessage({
      text,
      userAvatar: 'https://randomuser.me/api/portraits/men/51.jpg',
      userName: 'Евгений'
    }));
  }
}
