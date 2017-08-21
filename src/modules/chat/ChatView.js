import React from 'react';
import ChatSendMessageView from './SendMessageView';
import ChatHistoryView from './ChatHistoryView';

import s from './ChatView.css';


export default class ChatView extends React.PureComponent {
  render() {
    return (
      <div className={s.root}>
        <ChatSendMessageView />
        <ChatHistoryView />
      </div>
    );
  }
}

