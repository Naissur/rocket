import React from 'react';
import ChatSendMessageView from './SendMessageView';
import ChatHistoryView from './ChatHistoryView';

import s from './ChatView.css';

const debug = require('debug')('rocket:chat-view');


const INITIAL_MESSAGES = [
  {
    id: 1,
    type: 'message',
    text: 'можете проверить мой счёт? Я вчера им пользовался',
    userAvatar: 'https://randomuser.me/api/portraits/men/51.jpg',
    userName: 'Евгений'
  }, {
    id: 2,
    type: 'message',
    text: 'можете?',
    userAvatar: 'https://randomuser.me/api/portraits/men/51.jpg',
    userName: 'Евгений'
  }, {
    id: 3,
    type: 'message',
    text: 'можете? можете? можете? можете?м ожете?можете?можете?можете?можетеможетеможетеможете?можете????можете?',
    userAvatar: 'https://randomuser.me/api/portraits/men/51.jpg',
    userName: 'Евгений'
  }, {
    id: 4,
    type: 'message',
    text: 'можете?',
    userAvatar: 'https://randomuser.me/api/portraits/men/51.jpg',
    userName: 'Евгений'
  }
];

export default class ChatView extends React.PureComponent {
  render() {
    return (
      <div className={s.root}>
        <ChatSendMessageView onSendMessage={msg => debug('send message', msg)} />
        <ChatHistoryView messages={INITIAL_MESSAGES} />
      </div>
    );
  }
}

