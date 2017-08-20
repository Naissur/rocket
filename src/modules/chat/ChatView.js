import React from 'react';
import ChatSendMessageView from './SendMessageView';
import ChatHistoryView from './ChatHistoryView';

import s from './ChatView.css';

const debug = require('debug')('rocket:chat-view');


export default class ChatView extends React.PureComponent {
  render() {
    return (
      <div className={s.root}>
        <ChatSendMessageView onSendMessage={msg => debug('send message', msg)} />
        <ChatHistoryView />
      </div>
    );
  }
}

